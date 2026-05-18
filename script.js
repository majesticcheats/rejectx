const supabaseUrl =
'https://wghmbnxgdlccmdogtneb.supabase.co'

const supabaseKey =
'sb_publishable_yuV5vzp83pFaNQFIRGD27g_-JUxqkyD'

const supabase =
window.supabase.createClient(
  supabaseUrl,
  supabaseKey
)

async function register(){

  const email =
  document.getElementById('email').value

  const password =
  document.getElementById('password').value

  const { data, error } =
  await supabase.auth.signUp({

    email,
    password

  })

  if(error){

    alert(error.message)

  }

  else{

    alert('Conta criada com sucesso')

  }

}

async function login(){

  const email =
  document.getElementById('email').value

  const password =
  document.getElementById('password').value

  const { data, error } =
  await supabase.auth.signInWithPassword({

    email,
    password

  })

  if(error){

    alert(error.message)

  }

  else{

    alert('Login realizado')

  }

}