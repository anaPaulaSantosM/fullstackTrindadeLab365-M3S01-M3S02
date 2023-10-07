import { FormLoginComponent } from '../../Components/Form/FormLogin/FormLoginComponent.jsx';
import * as Styled from './LoginPage.style.jsx';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context.jsx';


export const LoginPage = () => {

    const { setData } = useContext(HeaderContext)
    useEffect(() => {
      setData({       
        iconHeader: '' ,
        buttonHeader: '',
    }) 
        
      }, []);


    return (
        <Styled.LoginPageContainer>
            <Styled.LoginCard>
                <Styled.ImageBox>
                    
                </Styled.ImageBox>

                <FormLoginComponent />
            </Styled.LoginCard>
        </Styled.LoginPageContainer>
    )
}