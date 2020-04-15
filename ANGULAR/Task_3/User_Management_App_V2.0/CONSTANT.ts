export class AppSettings{
    public static PASSWORD_PATTERN = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
    public static AGE_ERROR = "Age is Required";
    public static LOGIN_ERROR = "Login is Required";
    public static PASSWORD_ERROR = "Password is invalid";
    public static FIRSTNAME_ERROR = "Firstname is Required";
    public static LASTNAME_ERROR = "Lastname is Required";
}