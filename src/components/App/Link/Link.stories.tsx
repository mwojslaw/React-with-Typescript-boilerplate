import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Link from './';

storiesOf('Link', module)
  .add('Link', () => <Link href={''} text={'Sample text'} />)