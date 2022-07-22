import React, { CSSProperties } from 'react';
import Image from 'next/image';
import { useWindowWidth } from '../../hooks/useWindowWidthHook';
type layout = 'fixed' | 'fill' | 'intrinsic' | 'responsive' | undefined;

type WrapImageProps = {
  mobile?: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    layout?: layout;
    objectFit?: any;
    priority?: boolean;
    quality?: number;
    className?: string;
    style?: CSSProperties;
    id?: string;
  };
  desktop: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    layout?: layout;
    objectFit?: any;
    priority?: boolean;
    quality?: number;
    className?: string;
    style?: CSSProperties;
    id?: string;
  };
};

export const WrapImage = (props: WrapImageProps) => {
  const { mobile, desktop } = props;
  const width = useWindowWidth();
  if (width <= 768 && mobile) {
    // mobile screen
    return (
      <span className={mobile.className} style={mobile.style} id={mobile.id}>
        <Image
          src={mobile.src}
          alt={mobile.alt}
          width={mobile.width}
          height={mobile.height}
          layout={mobile.layout || 'intrinsic'}
          objectFit={mobile.objectFit}
          priority={mobile.priority}
          quality={mobile.quality || 100}
        />
      </span>
    );
  }
  return (
    <span className={desktop.className} style={desktop.style} id={desktop.id}>
      <Image
        src={desktop.src}
        alt={desktop.alt}
        width={desktop.width}
        height={desktop.height}
        layout={desktop.layout || 'intrinsic'}
        objectFit={desktop.objectFit}
        priority={desktop.priority}
        quality={desktop.quality || 100}
      />
    </span>
  );
};
