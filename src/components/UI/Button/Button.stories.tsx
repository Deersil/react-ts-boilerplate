import * as React from 'react';
import {storiesOf} from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
.addWithJSX('with background', () => (
  <Button 
    onClick={() => console.log('hello')} 
    disabled={false}>Hello World</Button>
  )
)