// Login supabase
const supabaseUrl = "https://gtzrweraragayovdrysa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0enJ3ZXJhcmFnYXlvdmRyeXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MzQ3NDIsImV4cCI6MjA1ODAxMDc0Mn0.G6aNX5m8DVaEwhbcPOjs2E8juQGCR3dp20Ame3Xe6mU";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function signUp () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { user, error } = await supabase.auth.signUp({ email, password });

  if(error) {
    console.log("No se puedo completar el Registro");;

  } else {
    console.log("Usuario registrado: ", user);
    alert("Registro Exitoso");
  }
}

async function signIn () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { user, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.log("Error al iniciar Sesion");

    } else {
      console.log("Ingreso exitoso de: ", user);
      alert("logeo exitoso");
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    console.log("Sesion Cerrada.");
    alert("Sesion Cerrada.");
  }