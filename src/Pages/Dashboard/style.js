import styled from "styled-components"

export const Container = styled.section`


    li {
        
        font-size: 32px;
        text-shadow: 0px 4px 4px rgba(0,0,0, 0.45);
    }
    span {
        color: #54a0ff
    }


`
export const InputContainer = styled.form`
    flex:1;
    margin-top:100px;
    padding: 0 38px;
    section {
            display: flex;
            flex-wrap: wrap;
            >div{
                max-width: 80%;
                flex:1;
                margin-right:16px;

                input {
                    width:10px
                }
            }
            button {
                max-width: 260px;
                height: 60px;
                margin: 0;
            }
        }
`