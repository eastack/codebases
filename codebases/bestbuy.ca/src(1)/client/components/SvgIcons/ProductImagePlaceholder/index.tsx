import * as React from "react";
import * as styles from "./style.css";
import {classname} from "utils/classname";

export interface ProductImagePlaceholderProps {
    title?: string;
    className?: string;
    height?: string;
    maxHeight?: string;
    maxWidth?: string;
    width?: string;
    src?: string;
    srcSet?: string;
    alt?: string;
    disableSeoAttributes?: boolean;
}
export const NO_IMAGE_PLACEHOLDER_PATH_FROM_API = "images/common/pictures/noimage";

export const ProductImagePlaceholder = (props: ProductImagePlaceholderProps) => {
    const imgItemProps = props.disableSeoAttributes ? {} : {itemProp: "image"};
    const placeholderImage = (
        <div className="x-placeholder-image">
            <img {...imgItemProps} {...props} alt="image placeHolder" />
        </div>
    );
    const svg = (
        <div
            className={classname([styles.container, "x-placeholder-image"])}
            style={{
                height: props.height || "100%",
                maxHeight: props.maxHeight || "none",
                maxWidth: props.maxWidth || "none",
                width: props.width || "100%",
            }}>
            <svg viewBox="0 0 240 170" style={{height: "80%", width: "60%"}} className={classname(styles.icon)}>
                <title>{props.title}</title>
                <path
                    fill="#E0E0E0"
                    fillRule="evenodd"
                    d="M263.941172,86.3376118 C264.205224,83.6387027 263.391776,81.0077976 261.662667,78.9251748 C259.937816,76.8383017 257.501732,75.5504758 254.810114,75.2954608 L86.3667824,59.051003 C86.2092035,59.034002 85.5192635,59 85.3659434,59 C83.0916966,59 80.8728152,59.7607949 79.147965,61.1251253 L33.3010216,96.584966 C31.0863991,98.2850662 29.6596712,100.856468 29.3913612,103.627631 L24.0549729,157.631315 C23.7653684,160.372727 24.6299229,163.148141 26.4143975,165.235014 L64.3312891,209.803141 C66.0603982,211.826261 68.4709295,213.084335 71.1497709,213.33935 L240.389515,228.967521 C240.542835,228.984522 241.202962,229.010024 241.360541,229.010024 C246.637305,229.010024 250.994149,225.05304 251.483921,219.803981 L263.941172,86.3376118 Z M243.634469,94.3236824 L233.042612,207.635363 L78.0105228,193.312019 L45.5748217,155.187271 L50.0764677,109.777594 L89.2795439,79.4393048 L243.634469,94.3236824 Z"
                    opacity=".502"
                    transform="translate(-24 -59)"
                />
            </svg>
        </div>
    );
    const placeHolder = props.src && !props.src.includes(NO_IMAGE_PLACEHOLDER_PATH_FROM_API) ? placeholderImage : svg;
    return placeHolder;
};

ProductImagePlaceholder.displayName = "ProductImagePlaceholder";

export default ProductImagePlaceholder;
