import React, { useState, useEffect, ReactNode } from "react";

interface SentenceProps {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

interface TypingEffectProps {
  children: React.ReactElement<SentenceProps>[];
}

const TypingEffect: React.FC<TypingEffectProps> = ({ children }) => {
  const [sentences, setSentences] = useState<{
    text: string;
    style?: React.CSSProperties;
    className?: string;
  }[]>([]);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const sentenceArray = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return {
          text: child.props.children as string,
          style: child.props.style,
          className: child.props.className,
        };
      }
      return { text: "", style: undefined, className: undefined };
    });
    setSentences(sentenceArray || []);
  }, [children]);

  useEffect(() => {
    const currentSentence = sentences[index];

    if (currentSentence) {
      if (typing) {
        if (charIndex < currentSentence.text.length) {
          const timeout = setTimeout(() => {
            setText((prev) => prev + currentSentence.text[charIndex]);
            setCharIndex((prev) => prev + 1);
          }, 100);
          return () => clearTimeout(timeout);
        } else {
          setTimeout(() => setTyping(false), 1000);
        }
      } else {
        if (charIndex > 0) {
          const timeout = setTimeout(() => {
            setText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          }, 50);
          return () => clearTimeout(timeout);
        } else {
          setTyping(true);
          setIndex((prev) => (prev + 1) % sentences.length);
        }
      }
    }
  }, [typing, charIndex, index, sentences]);

  return (
    <div>
      <div
        style={{ fontSize: "24px", fontFamily: "monospace", whiteSpace: "nowrap" }}
      >
        <span className={sentences[index]?.className} style={sentences[index]?.style}>
          {text}
        </span>
        <span
          className="cursor"
          style={{ borderLeft: "2px solid", marginLeft: "2px" }}
        ></span>
      </div>
    </div>
  );
};

export default TypingEffect;