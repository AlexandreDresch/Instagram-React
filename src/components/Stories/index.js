import { Story } from './Story';

import _9gag from '../../assets/9gag.png';
import meowed from '../../assets/meowed.png';
import barked from '../../assets/barked.png';
import nathan from '../../assets/nathanwpylestrangeplanet.png';
import wawawiwacomicsa from '../../assets/wawawiwacomicsa.png';
import respondeai from '../../assets/respondeai.png';
import filomoderna from '../../assets/filomoderna.png';
import memeriagourmet from '../../assets/memeriagourmet.png';
import chevronForward from '../../assets/chevron-forward-circle.svg';

import './styles.css';

const stories = [
    { name: '9gag', image : _9gag },
    { name: 'meowed', image : meowed },
    { name: 'barked', image : barked },
    { name: 'nathanwpylestrangeplanet', image : nathan },
    { name: 'wawawiwacomicsa', image :  wawawiwacomicsa},
    { name: 'respondeai', image : respondeai },
    { name: 'filomoderna', image : filomoderna },
    { name: 'memeriagourmet', image : memeriagourmet }
]

export function Stories() {
  return (
    <div className='stories-container'>
        {stories.map((item, i) => (
          <Story 
            key={i}
            image={item.image}
            name={item.name}
          />        
        ))}

        <img src={chevronForward} className='forward-icon' width='28px' alt='forward icon'/>
    </div>
  );
}
