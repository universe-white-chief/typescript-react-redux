import * as React from 'react';
import { Props, withErrorObject } from './withErrorObject';
import { View } from './View';

export const ErrorPage: React.ComponentType<Props> = withErrorObject(View);
