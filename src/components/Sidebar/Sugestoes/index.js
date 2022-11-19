import { Sugestao } from './Sugestao';

import badvibesmemes from '../../../assets/badvibesmemes.png';
import chibirdart from '../../../assets/chibirdart.png';
import razoesparaacreditar from '../../../assets/razoesparaacreditar.png';
import adorableanimals from '../../../assets/adorableanimals.png';
import smallcutecats from '../../../assets/smallcutecats.png';

import './styles.css';

const sugestions = [
    { name: 'bad.vibes.memes', photo: badvibesmemes, information: 'Segue você' },
    { name: 'chibirdart', photo: chibirdart, information: 'Segue você' },
    { name: 'razoesparaacreditar', photo: razoesparaacreditar, information: 'Novo no Instagram' },
    { name: 'adorable_animals', photo: adorableanimals, information: 'Segue você' },
    { name: 'smallcutecats', photo: smallcutecats, information: 'Segue você' },
]

export function Sugestoes () {
    return (
        <div className='sugestions'>
            <div className='sugestions-header'>
                <p>
                    Sugestões para você
                </p>

                <a href="#">
                    Ver tudo
                </a>
            </div>

            <div className='sugestions-container'>
                <div className='users-sugestions'>
                    {
                        sugestions.map((item, index) => (
                            <Sugestao 
                                key={index}
                                name={item.name}
                                photo={item.photo}
                                information={item.information}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}