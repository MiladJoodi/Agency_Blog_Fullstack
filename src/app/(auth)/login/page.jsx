import { handleGithubLogin } from "@/lib/actions";

const LoginPage = async () => {
    return (
        <div>
            <form action={handleGithubLogin}>
                <button>Login with Github</button>
            </form>
        </div>
    );
}

export default LoginPage;