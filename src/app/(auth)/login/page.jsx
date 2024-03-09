import { auth, signIn } from "@/lib/auth";

const LoginPage = async () => {

    const session = await auth();

    const handleGithub = async ()=>{
        "use server"
        await signIn("github")
    }

    return (
        <div>
            <form action={handleGithub}>
                <button>Login with Github</button>
            </form>
        </div>
    );
}

export default LoginPage;