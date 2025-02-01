"use client";
import { FC, useState } from "react";
import scss from "./AdminStudents.module.scss";
import AdmCoursesBox from "../dashboard/admCoursesBox/AdmCoursesBox";
import logo5 from "../../../../assets/chat5.png";
import logo6 from "../../../../assets/chat6.png";
import logo7 from "../../../../assets/chat7.png";
import Image from "next/image";

interface Student {
  id: number;
  name: string;
  course: string;
  image: string;
  description: string;
}

const students: Student[] = [
  {
    id: 1,
    name: "Саша Петрова",
    course: "Маркетинг",
    image: logo5,
    description:
      "Саша занимается маркетингом и успешно завершила несколько проектов.",
  },
  {
    id: 2,
    name: "Наталья Косенко",
    course: "Продажа услуг",
    image: logo7,
    description:
      "Наталья - эксперт в продажах услуг, обучила более 50 студентов.",
  },
  {
    id: 3,
    name: "Владимир Алексеев",
    course: "Продажа услуг",
    image: logo6,
    description:
      "Владимир специализируется на услугах и разрабатывает стратегии продаж.",
  },
];

const AdminStudents: FC = () => {
  const [modal, setModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const openModal = (student: Student) => {
    setSelectedStudent(student);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedStudent(null);
  };

  return (
    <section className={scss.AdminStudents}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.profile}>
            <AdmCoursesBox />
          </div>
          <div className={scss.students}>
            {students.map((student) => (
              <div key={student.id} className={scss.student_block}>
                <div className={scss.info}>
                  <Image src={student.image} alt={student.name} />
                  <div className={scss.info_text}>
                    <h1>{student.name}</h1>
                    <p>{student.course}</p>
                  </div>
                </div>
                <button onClick={() => openModal(student)}>Смотреть</button>
              </div>
            ))}
          </div>

          {modal && selectedStudent && (
            <div className={scss.modal}>
              <div className={scss.modal_content}>
                <button className={scss.close_button} onClick={closeModal}>
                  ✖
                </button>
                <Image
                  src={selectedStudent.image}
                  alt={selectedStudent.name}
                  width={100}
                  height={100}
                />
                <h1>{selectedStudent.name}</h1>
                <p>{selectedStudent.course}</p>
                <p>{selectedStudent.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminStudents;
