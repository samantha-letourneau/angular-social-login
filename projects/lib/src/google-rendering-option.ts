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

export enum gSize {
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
    public Type: gType = gType.Standard;
    public Shape: gShape = gShape.Rectangular;
    public Size: gSize = gSize.Large;
    public Theme: gTheme = gTheme.FilledBlue;
    public Label: gLabel = gLabel.SigninWith;
    public Width = 40;
}