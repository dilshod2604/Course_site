"use client";
import React, { useState } from "react";
import scss from "./VideoAbout.module.scss";
import { useParams } from "next/navigation";
import { lessons } from "@/src/constants/lessons";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { LiaWhatsapp } from "react-icons/lia";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { message } from "@/src/constants/message";
import Image from "next/image";
import { BiShare } from "react-icons/bi";
import { GoSmiley } from "react-icons/go";

const VideoAbout = () => {
  const { id } = useParams();
  const lesson = lessons.find((el) => el.id === Number(id));
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      window.location.href
    )}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(
      window.location.href
    )}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`,
  };

  return (
    <section className={scss.VideoAbout}>
      <div className="container">
        <div className={scss.videoAbout_videos_blocks}>
          <div className={scss.videoAbout_videos}>
            {lesson ? (
              <div key={lesson.id} className={scss.video}>
                <div className={scss.buttons}>
                  <button>
                    <MdOutlineKeyboardArrowLeft />
                  </button>
                  <h1>{lesson.title}</h1>
                </div>
                <div className={scss.videoWrapper}>
                  {lesson.video.map((el, videoIndex) => (
                    <>
                      <iframe
                        key={`${el.id}-${videoIndex}`}
                        width="550px"
                        height="250px"
                        src={`https://www.youtube.com/embed/${extractVideoId(
                          el.video
                        )}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <div className={scss.descriprion}>
                        <p>{el.description}</p>
                        <div className={scss.share_wrapper}>
                          <button
                            onClick={togglePopup}
                            className={scss.share_button}
                          >
                            Поделиться
                          </button>
                          {isOpen && (
                            <div className={scss.share_modal}>
                              <div className={scss.share_icons}>
                                <a
                                  href={shareLinks.whatsapp}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <LiaWhatsapp />
                                </a>
                                <a
                                  href={shareLinks.telegram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaTelegram />
                                </a>
                                <a
                                  href={shareLinks.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaFacebook />
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className={scss.veiw}>
                        <h6>1 месяц назад</h6>
                        <h6>1430 просмотров</h6>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            ) : (
              <p>Lesson not found</p>
            )}
          </div>
          <div className={scss.line}></div>
          <div className={scss.videoAbout_message}>
            {message.map((el, index) => (
              <>
                <div key={index} className={scss.message}>
                  <div className={scss.Users}>
                    <div className={scss.user_img}>
                      <Image src={el.image} alt="img" width={20} height={20} />
                    </div>
                    <div className={scss.user_info}>
                      <div className={scss.user_name}>
                        <h4>{el.name}</h4>
                        <p>{el.time}</p>
                      </div>
                      <h5>{el.message}</h5>
                      <div className={scss.user_message}>
                        <h6>
                          <BiShare />
                          {el.description}
                        </h6>
                        <h6>{el.time2}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div className={scss.emogis}>
              <input type="text" placeholder="Комментировать..." />
              <GoSmiley />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const extractVideoId = (url: string) => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)|youtu\.be\/([^&]+)/;
  const match = url.match(regex);
  return match ? match[1] || match[2] : "";
};

export default VideoAbout;
