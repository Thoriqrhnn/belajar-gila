// import React, { Fragment, useState } from 'react'

// const Tes = () => {
//   const [angka, setAngka] = useState(0)
//   function Inc() {
//     setAngka(angka + 1)
//   }
//   const Kurang = () => {
//     setAngka(angka - 1)
//   }
//   const Kali = () => {
//     setAngka(angka * angka)
//   }
//   const Reset = () => {
//     setAngka(angka * 0)
//   }
//   return (
//     <div className='d-flex flex-column p-2 align-items-center border border-primary justify-content-center'>
//       <div>{angka}</div>
//       <button onClick={Inc}>Ditambah 1</button>
//       <button onClick={Kurang}>Dikurang 1</button>
//       <button onClick={Kali}>Dikali angka yg sama</button>
//       <button onClick={Reset}>Hapus</button>
//     </div>
//   )
// }

// export default Tes

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Muhammad',
  lastName: 'Thoriq',
};

const Tes = () => {
  return (
    <h1>Hello, {formatName(user)}</h1>
  )
}

export default Tes