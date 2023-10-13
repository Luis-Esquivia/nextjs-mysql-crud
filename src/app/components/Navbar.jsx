"use client"
import Link from "next/link"
import styled from "styled-components"

export default function Navbar() {

  /*ESTILOS CON styled-components*/
  let colorH3 = "rgb(3 105 161)";
  const setTransitionTime = (time) => `all ${time} ease-in-out`;
  
  const MyNavbar = styled.nav`
     --tw-bg-opacity: 1;
    background-color: rgb(39 39 42 / var(--tw-bg-opacity));
    padding-top: 0.75rem/* 12px */;
    padding-bottom: 0.75rem/* 12px */;
    margin-bottom: 1rem/* 16px */;
  `;

  const Title = styled.h3`
    font-size: 1.875rem/* 30px */;
    line-height: 2.25rem/* 36px */;
    font-weight: bold; 
    color: ${colorH3}; 
    transition: ${setTransitionTime('0.2s')};

    &:hover{
      color: rgb(7 89 133);
    }
  `;

  const Myli = styled.li`
    --tw-text-opacity: 1;
    color: rgb(14 165 233 / var(--tw-text-opacity));
    font-weight: bold;
    transition: ${setTransitionTime('0.2s')};

    &:hover{
      --tw-text-opacity: 1;
    color: rgb(56 189 248 / var(--tw-text-opacity));
    }
  `;

  /******************************/

  return (
    <MyNavbar>
       <div className="container mx-auto flex justify-between items-center ">
        <Link href="/"><Title>NextMySQL</Title></Link>  
            <ul>
                <Myli>
                    <Link href="/new"> new </Link>
                </Myli>
            </ul>
       </div>
    </MyNavbar>
  )
}
