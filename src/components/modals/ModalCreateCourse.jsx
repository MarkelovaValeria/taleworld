import Image from 'next/image'
import React from 'react'

function ModalCreateCourse({closeModal}) {
  return (
    <div className='modal-create-course'>
        <div className='modal-create-course__inner'>
            <div className='modal-create-course__inner-top'>
                <h1>Твій курс - твої правила!</h1>
                <p>Початок нового буває важким, але в Тебе це вийде!</p>
            </div>
            <form className='modal-create-course__inner-form'>
                <input className='modal-create-course__inner-form-input' type="text" placeholder='Назва курсу'/>
                <input className='modal-create-course__inner-form-input' type="text" placeholder='Опис'/>
                <button className='modal-create-course__inner-form-submit' type='submit'>Створити курс</button>
            </form>
            <Image className='modal-create-course__inner-img' src={'/images/Cat.png'} width={'320'} height={'530'}/>
            <button className='modal-create-course__inner-close' onClick={closeModal}>
                <Image src={'/images/close.svg'} fill/></button>
        </div>
    </div>
  )
}

export default ModalCreateCourse