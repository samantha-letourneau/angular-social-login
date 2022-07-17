export enum gType {
    Standard = "standard",
    Icon = "icon"
}

export enum gShape {
    /** For standard shape type */
    Rectangular = "rectangular",
    /** For standard shape type */
    Pill = "pill",
    /** For icon shape type */
    Square = "square",
    /** For icon shape type */
    Circle = "circle"
}

export enum ButtonSize {
    Small = "small",
    Medium = "medium",
    Large = "large"
}

export enum gTheme {
    Outline = "outline",
    FilledBlue = "filled_blue",
    FilledBlack = "filled_black"
}

export enum gLabel {
    SigninWith = "signin_with",
    SignupWith = "signup_with",
    ContinueWith = "continue_with",
    Signin = "signin"
}

export class GoogleSigninButtonOptions {
    constructor() { }
    /** Button type */
    public Type?: gType;
    /** Button shape */
    public Shape?: gShape;
    /** Button size */
    public Size?: ButtonSize;
    /** Button theme */
    public Theme?: gTheme;
    /** Button text */
    public Label?: gLabel;
    public Width?: string;
}

export enum fbLayout {
    Default = "default",
    Rounded = "rounded"
}

export enum fbLabel {
    LoginWith = "login_with",
    ContinueWith = "continue_with"
}

export class FacebookSigninButtonOptions {
    constructor() { }
    /** Button shape */
    public Layout?: fbLayout;
    /** Button text */
    public Label?: fbLabel;
    /** Button size */
    public Size?: ButtonSize;
    /** Activate the Logout button */
    public ActivateLogout?: boolean;
    /** Include the profile name and photo the user is logged onto Facebook */
    public IncludeProfileNameIfAny?: boolean;
    /** Button width */
    public Width? : string;
}

export enum msShape {
    Rectangular = "rectangular",
    Pill = "pill"
}

export class MicrosoftSigninButtonOptions {
    constructor() {}
    /** Button text */
    public Label?: string;
    /** Button shape */
    public Shape?: msShape;
    public Width?: string;
}