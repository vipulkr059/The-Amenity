import supabase from "./supabase";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
  return data;
}

export async function getCurrentUser(params) {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
}

export async function logout(params) {
  let { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

export async function signup({ email, password, fullName }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
        isAdmin: true,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// export async function signup({ email, password, fullName }) {
//   try {
//     // Sign up the user
//     const { user, error } = await supabase.auth.signUp({
//       email,
//       password,
//       options: {
//         fullName,
//         avatar: "",
//       },
//     });

//     if (error) {
//       console.error("Error signing up admin:", error.message);
//       return { error: "Failed to sign up" };
//     }

//     // Set custom claim indicating admin status
//     const { error: updateError } = await supabase.auth.api.updateUser(user.id, {
//       app_metadata: { isAdmin: true },
//     });

//     if (updateError) {
//       console.error(
//         "Error setting custom claim for admin:",
//         updateError.message
//       );
//       return { error: "Failed to set custom claim" };
//     }

//     return { user };
//   } catch (error) {
//     console.error("Error signing up admin:", error.message);
//     return { error: "Internal server error" };
//   }
// }

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password OR fullName
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}

export async function userSignup({ email, password, fullName }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
        isAdmin: false,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
