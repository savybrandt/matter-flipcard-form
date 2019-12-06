import { FIELDS } from './constants';
import ImageUploaderField from '../common/ImageUploaderField';

export const fields = [
  {
    name: FIELDS.FIRST,
    type: 'text',
    page: 1,
    label: 'First Name',
    placeholder: 'Cool',
  },
    {
    name: FIELDS.LAST,
    type: 'text',
    page: 1,
    label: 'Last Name',
    placeholder: 'Cool',
  },
    {
    name: FIELDS.TITLE,
    type: 'text',
    page: 1,
    label: 'Title',
    placeholder: 'Cool',
  },
  {
    name: FIELDS.COLOR,
    type: 'text',
    page: 1,
    label: 'Choose your favorite color',
    placeholder: 'Cool',
  },
    {
    name: FIELDS.IMG,
    page: 2,
    label: 'Upload a photo',
    placeholder: 'Cool',
    component: ImageUploaderField
  },
  {
    name: FIELDS.STORY,
    type: 'textarea',
    page: 3,
    label: 'Story',
    placeholder: 'Cool',
  }
];