import { CardElement } from '@harryapp/snaps-sdk/jsx';
import { mapToTemplate } from '../utils';
import { UIComponentFactory } from './types';

export const card: UIComponentFactory<CardElement> = ({ element, ...params }) => ({
  element: 'SnapUICard',
  props: {
    image: element.props.image,
    ...(typeof element.props.title === 'string' ? { title: element.props.title } : {}),
    description: element.props.description,
    value: element.props.value,
    extra: element.props.extra,
  },
  ...(typeof element.props.title !== 'string' ? { propComponents: { title: mapToTemplate({ element: element.props.title, ...params }) } } : {}),
});
