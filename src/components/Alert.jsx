/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function Alert({type, message}) {
    const baseStyle = css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: black;
        font-size: 18px;
        font-weight: bold;
        text-align: left;
        border: none;
        border-radius: 8px;
        padding: 16px;
        padding-right: 300px;
        margin: 40px;
        box-sizing: border-box;`;

    const errorStyle = css`
        ${baseStyle};
        background-color: #FFCCCC`;

    const warningStyle = css`
        ${baseStyle};
        background-color: #FFCC99`;

    const infoStyle = css`
        ${baseStyle};
        background-color: #FFFFCC`;

    const successStyle = css`
        ${baseStyle};
        background-color:rgb(190, 246, 190)`;
    
    return (
        <p css=
            {type === "error" ? 
            errorStyle: type === "warning" ?
            warningStyle: type === "info" ?
            infoStyle: successStyle}>{message}</p>
    )
}

export default Alert;