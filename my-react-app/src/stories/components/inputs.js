import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('Input', module)
  .add('with text', () => (
    <div>
      <h3>Input with a beautiful title :</h3>
		  <input></input>
    </div>
  ))