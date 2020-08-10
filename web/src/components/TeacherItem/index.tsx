import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem: React.FC = (props) => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png" alt="" />
                <div>
                    <strong>Diego Fernandes</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;