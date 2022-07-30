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

export enum Shape {
    Rectangular = "rectangular",
    Pill = "pill"
}

export class SocialSigninButtonOptions {
    public Provider?: Provider;
    /** Button text */
    public Label?: string;
    /** Button shape */
    public Shape?: Shape;
    public Width?: string;
}

export enum Provider {
    Facebook = 1,
    Microsoft = 2
}