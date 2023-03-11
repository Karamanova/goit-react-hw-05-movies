import { Formik } from 'formik';
import { SearchingForm, SearchFormInput } from './Searchbox.styled';
import { SearchButton } from 'components/Searchbox/SearchButton';

export const Searchbox = ({ onSubmit, value }) => {
  return (
    <Formik
      initialValues={{ query: value ?? '' }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      <SearchingForm>
        <SearchFormInput
          type="text"
          name="query"
          placeholder="Enter a keyword"
        />
        <SearchButton />
      </SearchingForm>
    </Formik>
  );
};