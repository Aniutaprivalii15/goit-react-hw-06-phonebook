import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterContact';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

    const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  
  // const handleChange = e => {
  //   const normalizeFilter = e.target.value.toLowerCase();

  //   dispatch(setFilter(normalizeFilter));

  return (
      <label className={css.label}>
          Find contacts by name
          <input type="text" onChange={handleChange} />
      </label>
  );
};

export default Filter;

















// import css from './Filter.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { getFilter } from 'redux/selectors';
// import { setFilter } from 'redux/contactsSlice';

// export const Filter = () => {
//   const dispatch = useDispatch();
//     const filter = useSelector(getFilter);

//   const handleChange = e => {
//     dispatch(setFilter(e.target.value));
//   };

//   return (
//     <div>
//       <label className={css.filterLabel}>Find contacts by Name </label>
//       <input
//         className={css.filterName}
//         type="text"
//         name="filter"
//         placeholder="Enter filter"
//         value={filter}
//         onChange={handleChange}
//       />
//     </div>
//       // <label className={css.label}>
//       //     Find contacts by name
//       //     <input type="text" onChange={handleChange} />
//       // </label>
//   );
// };
