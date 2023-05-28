import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => (
  <div>
    <ul className={css.ContactList}>
      {contacts?.map((contact, id) => (
        <li key={id} className={css.contactListItem}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.contactListItemBtn}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
// export const ContactList = ({ contacts, handleDelete }) => (
//   <div className={css.wraperContactList}>
//     <ul className={css.СontactList}>
//       {contacts?.map((contact, id) => (
//         <li key={id} className={css.contactListItem}>
//           {contact.name} : {contact.number}
//           <button
//             type="button"
//             className={css.contactListItemBtn}
//             onClick={() => handleDelete(contact.id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   </div>
// );