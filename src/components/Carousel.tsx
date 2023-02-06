import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "./Flex";
import React from "react";

interface CarrouselProps { }
export const Carrousel = (props: React.PropsWithChildren<CarrouselProps>) => {
  const [index, setIndex] = React.useState(0);

  const count = React.Children.count(props.children);

  const x = React.useMemo(() => {
    return index * 100;
  }, [index, props.children]);

  return (
    <Row className="relative mt-8 mb-8 mr-0 ml-0">
      <FontAwesomeIcon
        className="absolute text-4xl text-neutral-400 z-10 transition-transform ease-in-out hover:text-slate-300 ml-1 active:translate-y-1 hover:translate-y-0.5"
        onClick={() => {
          if (index <= 0) {
            setIndex(count - 1);
          } else {
            setIndex(index - 1);
          }
        }}
        icon={faChevronCircleLeft}
      />
      <Row
        className="overflow-visible w-full z-10 transition-transform ease-in-out"
        style={{ transform: `translateX(-${x}%)` }}
      >
        {props.children}
      </Row>
      <FontAwesomeIcon
        className="text-4xl text-neutral-400 z-10 transition-transform ease-in-out hover:text-slate-300 mr-1 active:translate-y-1 hover:translate-y-0.5"
        onClick={() => {
          if (index < count - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}
        icon={faChevronCircleRight}
      />
    </Row>
  );
};

export const CarrouseChild = (props: React.PropsWithChildren<{}>) => {
  return <Row className="w-1/3">{props.children}</Row>;
};
