
import { Link,  useLocation, useNavigate, } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import swal from "sweetalert";



const LoginPage = () => {

    const {signIn,signInWithGoogle} = useContext(AuthContext);

    // console.log(signIn.email);
    // ata privecteRoute thake ascha
    const loaction = useLocation();
    console.log('loaction in the login page', loaction);
    const Navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email,password)
        // console.log(email)
        .then(result=>{
            console.log(result.user)
            swal("LOGIN SUCCESS !", "", "success");
            // Navigate aer por login 
            Navigate(loaction?.state? loaction.state :'/' );
            
        })
        .catch(error=>{
            console.log(error);
            swal("Sorry!", "Your email and password Incorrect!", "error");
        })
       

    }
   //google login
    const handleGoogleSignIn =() =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithGoogle(googleProvider)
        .then (result =>{
            const googleLogIn = result.user
            console.log(googleLogIn);
            Navigate(loaction?.state? loaction.state :'/' );
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            {/* <!-- component --> */}
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 max-w">
                        Or
                        <Link to="/online-marketing/signup" className="font-medium text-blue-600 hover:text-blue-500">
                            create an account
                        </Link>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" autoComplete="email" required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your email address" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input id="password" name="password" type="password" autoComplete="current-password" required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your password" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                    Sign in
                                </button>
                            </div>
                        </form>
                        <div className="mt-6">

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-gray-100 text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            < div className="">
                                
                                <p className="mt-5"><button type="button" onClick={handleGoogleSignIn} className="btn btn-primary">GOOGLE</button></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
