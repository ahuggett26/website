import androidLogo from "../../../../resources/images/portfolio/icons/android-logo.svg";
import bootstrapLogo from "../../../../resources/images/portfolio/icons/bootstrap-logo.svg";
import cSharpLogo from "../../../../resources/images/portfolio/icons/csharp-logo.png";
import firebaseLogo from "../../../../resources/images/portfolio/icons/firebase-logo.svg";
import javaLogo from "../../../../resources/images/portfolio/icons/java-logo.svg";
import kotlinLogo from "../../../../resources/images/portfolio/icons/kotlin-logo.png";
import materialUiLogo from "../../../../resources/images/portfolio/icons/material-ui-logo.svg";
import nextjsLogo from "../../../../resources/images/portfolio/icons/nextjs-logo.png";
import reactLogo from "../../../../resources/images/portfolio/icons/react-logo.svg";
import sassLogo from "../../../../resources/images/portfolio/icons/sass-logo-64.png";
import scalaLogo from "../../../../resources/images/portfolio/icons/scala-logo.png";
import tailwindCssLogo from "../../../../resources/images/portfolio/icons/tailwindcss-logo.svg";
import tsLogo from "../../../../resources/images/portfolio/icons/ts-logo-128.png";
import unityLogo from "../../../../resources/images/portfolio/icons/unity-logo.png";

/**
 * Interface representing a single technology used in a portfolio project.
 */
export interface Technology {
  /** Iconography for the technology. */
  iconSrc?: string;
  /** The name of the technology used. */
  name: string;
}

export class TAndroid implements Technology {
  iconSrc = androidLogo;
  name = "Android";
}

export class TBootstrap implements Technology {
  iconSrc = bootstrapLogo;
  name = "Bootstrap";
}

export class TCSharp implements Technology {
  iconSrc = cSharpLogo;
  name = "C#";
}

export class TFirebase implements Technology {
  iconSrc = firebaseLogo;
  name = "Firebase";
}

export class TJava implements Technology {
  iconSrc = javaLogo;
  name = "Java";
}

export class TKotlin implements Technology {
  iconSrc = kotlinLogo;
  name = "Kotlin";
}

export class TMaterialUi implements Technology {
  iconSrc = materialUiLogo;
  name = "Material UI";
}

export class TNextJs implements Technology {
  iconSrc = nextjsLogo;
  name = "Next.js";
}

export class TReact implements Technology {
  iconSrc = reactLogo;
  name = "React";
}

export class TSass implements Technology {
  iconSrc = sassLogo;
  name = "Sass";
}

export class TScala implements Technology {
  iconSrc = scalaLogo;
  name = "Scala";
}

export class TSwing implements Technology {
  iconSrc = javaLogo;
  name = "Java Swing";
}

export class TTailwindCss implements Technology {
  iconSrc = tailwindCssLogo;
  name = "Tailwind CSS";
}

export class TTypeScript implements Technology {
  iconSrc = tsLogo;
  name = "TypeScript";
}

export class TUnity implements Technology {
  iconSrc = unityLogo;
  name = "Unity";
}
