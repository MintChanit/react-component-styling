/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function Button({ type }) {
    const baseStyle = css`
        display: flex;
        color: white;
        font-size: 16px;
        border-radius: 4px;
        padding: 10px 60px;
        border: none;
        margin: 40px;
        &:hover {
            color: black;
            }
        `;

    const primaryStyle = css`
        ${baseStyle};
        background-color: #074EE8;
        &:hover {
            background-color:rgb(144, 173, 236);
            }`;

    const secondaryStyle = css`
        ${baseStyle};
        background-color: #07A4E8;
        &:hover {
            background-color:rgb(146, 207, 235);
            }`;

    const errorStyle = css`
        ${baseStyle};
        background-color: #DE5753;
        &:hover {
            background-color:rgb(237, 158, 155);
            }`;

    const successStyle = css`
        ${baseStyle};
        background-color: #26B795;
        &:hover {
            background-color:rgb(148, 235, 214);
            }`;
    
    return (
        <button css={type === "primary" ? 
            primaryStyle : type === "secondary" ? secondaryStyle: type === "error" ? 
            errorStyle: successStyle}>Button</button>
    )
}

export default Button;
