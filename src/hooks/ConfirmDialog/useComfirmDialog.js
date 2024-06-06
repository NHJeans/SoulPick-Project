// import { useState } from 'react';
// import ConfirmDialog from '../../components/ConfirmDialog';
//
// function useConfirmDialog ()  {
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [onConfirm, setOnConfirm] = useState(() => () => {});
//
//   const openDialog = (msg, onConfirmCallback) => {
//     setMessage(msg);
//     setOnConfirm(() => onConfirmCallback);
//     setIsOpen(true);
//   };
//
//   const closeDialog = () => {
//     setIsOpen(false);
//   };
//
//   const ConfirmDialogComponent = () => (
//     isOpen && (
//       <ConfirmDialog
//         message={message}
//         onConfirm={() => {
//           onConfirm();
//           closeDialog();
//         }}
//         onClose={closeDialog}
//       />
//     )
//   );
//
//   return [openDialog, ConfirmDialogComponent];
// }
//
// export default useConfirmDialog;
