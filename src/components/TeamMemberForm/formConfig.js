import { object, string } from 'yup';
import { FIELDS } from './constants';
import ImageUploaderField from '../common/ImageUploaderField';
import ColorPickerField from '../common/ColorPickerField';

export const fields = [
  {
    page: 1,
    type: 'text',
    name: FIELDS.FIRST,
    label: 'First Name',
    placeholder: 'Cool',
  },
  {
    page: 1,
    type: 'text',
    name: FIELDS.LAST,
    label: 'Last Name',
    placeholder: 'Cat',
  },
  {
    page: 1,
    type: 'text',
    label: 'Title',
    name: FIELDS.TITLE,
    placeholder: 'Engineer',
  },
  {
    page: 1,
    name: FIELDS.COLOR,
    component: ColorPickerField,
    label: 'Choose your favorite color',
  },
  {
    page: 2,
    name: FIELDS.IMG,
    label: 'Upload a photo',
    component: ImageUploaderField,
  },
  {
    page: 3,
    name: FIELDS.STORY,
    component: 'textarea',
    label: 'Tell us your story',
    placeholder: 'Some of the best feedback I received was...',
  },
];

export const validationScheama = object({
  [FIELDS.FIRST]: string().required('Required'),
  [FIELDS.LAST]: string().required('Required'),
  [FIELDS.TITLE]: string().required('Required'),
  [FIELDS.COLOR]: string().required('Required'),
  [FIELDS.IMG]: string().required('Required'),
  [FIELDS.STORY]: string().required('Required'),
});
