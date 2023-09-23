import { motion, type HTMLMotionProps } from "framer-motion";
import { icons } from "./Icons";
import classNames from "classnames";

type Type = "button" | "submit" | "reset" | "link";

type ButtonTypeProps = HTMLMotionProps<"button">;

type AnchorTypeProps = HTMLMotionProps<"a">;

type ButtonProps = {
  className?: string;
  loading?: boolean;
  width?: string;
  type?: Type;
  text: string;
} & (ButtonTypeProps | AnchorTypeProps);

export default function Button({
  className,
  loading,
  width = "10.75rem",
  text,
  type,
  ...props
}: ButtonProps) {
  const motionProps = {
    initial: {
      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    },
    whileHover: { scale: 1.05, boxShadow: "0 12px 18px -3px rgb(0 0 0 / 0.1)" },
    whileTap: { scale: 0.95, boxShadow: "0 8px 12px -2px rgb(0 0 0 / 0.1)" },
  };

  if (type === "link")
    return (
      <motion.a
        {...motionProps}
        {...(props as AnchorTypeProps)}
        style={{
          width,
          background:
            "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
        }}
        className={classNames(
          "flex items-center shrink-0 justify-center text-gl-white h-[3.3125rem] rounded text-base",
          className
        )}
      >
        {text}
      </motion.a>
    );

  return (
    <motion.button
      {...motionProps}
      style={{
        width,
        background:
          "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
      }}
      className={classNames(
        "flex items-center shrink-0 justify-center text-gl-white h-[3.3125rem] rounded text-base",
        className
      )}
    >
      {!loading && text}
      {loading && icons.spinner}
    </motion.button>
  );
}
