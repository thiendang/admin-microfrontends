import React from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout.tsx';
import { MicrofrontendSlot } from 'microfrontends';
import MapOne from '../../components/Maps/MapOne.tsx';
import ChatCard from '../../components/Chat/ChatCard.tsx';

const CRM: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-title-sm2 font-bold text-black dark:text-white">
              This Week’s Overview
            </h2>
          </div>
        </div>
        <MicrofrontendSlot className="contents" name="card-four" />
      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-7">
          <MicrofrontendSlot className="contents" name="chart-seven" />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <MicrofrontendSlot className="contents" name="chart-eight" />
        </div>
        <div className="col-span-12">
          <MicrofrontendSlot className="contents" name="table-six" />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <MicrofrontendSlot className="contents" name="chart-ten" />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <div className="h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-4 py-4 dark:border-strokedark md:px-6 md:py-6 xl:px-7.5">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                    To Do List
                  </h2>
                </div>
                <div className="relative flex">
                  <button className="text-[#98A6AD] hover:text-body">
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25 11.25C3.49264 11.25 4.5 10.2426 4.5 9C4.5 7.75736 3.49264 6.75 2.25 6.75C1.00736 6.75 0 7.75736 0 9C0 10.2426 1.00736 11.25 2.25 11.25Z"
                        fill=""
                      ></path>
                      <path
                        d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
                        fill=""
                      ></path>
                      <path
                        d="M15.75 11.25C16.9926 11.25 18 10.2426 18 9C18 7.75736 16.9926 6.75 15.75 6.75C14.5074 6.75 13.5 7.75736 13.5 9C13.5 10.2426 14.5074 11.25 15.75 11.25Z"
                        fill=""
                      ></path>
                    </svg>
                  </button>
                  <div className="absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark hidden">
                    <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                      <svg
                        className="fill-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_62_9787)">
                          <path
                            d="M15.55 2.97499C15.55 2.77499 15.475 2.57499 15.325 2.42499C15.025 2.12499 14.725 1.82499 14.45 1.52499C14.175 1.24999 13.925 0.974987 13.65 0.724987C13.525 0.574987 13.375 0.474986 13.175 0.449986C12.95 0.424986 12.75 0.474986 12.575 0.624987L10.875 2.32499H2.02495C1.17495 2.32499 0.449951 3.02499 0.449951 3.89999V14C0.449951 14.85 1.14995 15.575 2.02495 15.575H12.15C13 15.575 13.725 14.875 13.725 14V5.12499L15.35 3.49999C15.475 3.34999 15.55 3.17499 15.55 2.97499ZM8.19995 8.99999C8.17495 9.02499 8.17495 9.02499 8.14995 9.02499L6.34995 9.62499L6.94995 7.82499C6.94995 7.79999 6.97495 7.79999 6.97495 7.77499L11.475 3.27499L12.725 4.49999L8.19995 8.99999ZM12.575 14C12.575 14.25 12.375 14.45 12.125 14.45H2.02495C1.77495 14.45 1.57495 14.25 1.57495 14V3.87499C1.57495 3.62499 1.77495 3.42499 2.02495 3.42499H9.72495L6.17495 6.99999C6.04995 7.12499 5.92495 7.29999 5.87495 7.49999L4.94995 10.3C4.87495 10.5 4.92495 10.675 5.02495 10.85C5.09995 10.95 5.24995 11.1 5.52495 11.1H5.62495L8.49995 10.15C8.67495 10.1 8.84995 9.97499 8.97495 9.84999L12.575 6.24999V14ZM13.5 3.72499L12.25 2.49999L13.025 1.72499C13.225 1.92499 14.05 2.74999 14.25 2.97499L13.5 3.72499Z"
                            fill=""
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_62_9787">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      Edit{' '}
                    </button>
                    <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                      <svg
                        className="fill-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.225 2.20005H10.3V1.77505C10.3 1.02505 9.70005 0.425049 8.95005 0.425049H7.02505C6.27505 0.425049 5.67505 1.02505 5.67505 1.77505V2.20005H3.75005C3.02505 2.20005 2.42505 2.80005 2.42505 3.52505V4.27505C2.42505 4.82505 2.75005 5.27505 3.22505 5.47505L3.62505 13.75C3.67505 14.775 4.52505 15.575 5.55005 15.575H10.4C11.425 15.575 12.275 14.775 12.325 13.75L12.75 5.45005C13.225 5.25005 13.55 4.77505 13.55 4.25005V3.50005C13.55 2.80005 12.95 2.20005 12.225 2.20005ZM6.82505 1.77505C6.82505 1.65005 6.92505 1.55005 7.05005 1.55005H8.97505C9.10005 1.55005 9.20005 1.65005 9.20005 1.77505V2.20005H6.85005V1.77505H6.82505ZM3.57505 3.52505C3.57505 3.42505 3.65005 3.32505 3.77505 3.32505H12.225C12.325 3.32505 12.425 3.40005 12.425 3.52505V4.27505C12.425 4.37505 12.35 4.47505 12.225 4.47505H3.77505C3.67505 4.47505 3.57505 4.40005 3.57505 4.27505V3.52505V3.52505ZM10.425 14.45H5.57505C5.15005 14.45 4.80005 14.125 4.77505 13.675L4.40005 5.57505H11.625L11.25 13.675C11.2 14.1 10.85 14.45 10.425 14.45Z"
                          fill=""
                        ></path>
                        <path
                          d="M8.00005 8.1001C7.70005 8.1001 7.42505 8.3501 7.42505 8.6751V11.8501C7.42505 12.1501 7.67505 12.4251 8.00005 12.4251C8.30005 12.4251 8.57505 12.1751 8.57505 11.8501V8.6751C8.57505 8.3501 8.30005 8.1001 8.00005 8.1001Z"
                          fill=""
                        ></path>
                        <path
                          d="M9.99994 8.60004C9.67494 8.57504 9.42494 8.80004 9.39994 9.12504L9.24994 11.325C9.22494 11.625 9.44994 11.9 9.77494 11.925C9.79994 11.925 9.79994 11.925 9.82494 11.925C10.1249 11.925 10.3749 11.7 10.3749 11.4L10.5249 9.20004C10.5249 8.87504 10.2999 8.62504 9.99994 8.60004Z"
                          fill=""
                        ></path>
                        <path
                          d="M5.97497 8.60004C5.67497 8.62504 5.42497 8.90004 5.44997 9.20004L5.62497 11.4C5.64997 11.7 5.89997 11.925 6.17497 11.925C6.19997 11.925 6.19997 11.925 6.22497 11.925C6.52497 11.9 6.77497 11.625 6.74997 11.325L6.57497 9.12504C6.57497 8.80004 6.29997 8.57504 5.97497 8.60004Z"
                          fill=""
                        ></path>
                      </svg>
                      Delete{' '}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-4 md:px-6 md:py-6 xl:px-7.5">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow items-center gap-4.5">
                    <div className="hidden h-15 w-full max-w-15 items-center justify-center rounded-full border border-stroke bg-gray dark:border-strokedark dark:bg-meta-4 xsm:flex">
                      <img
                        src="https://react-demo.tailadmin.com/assets/uideck-d5b949ad.svg"
                        alt="Uideck Yearly Meetings"
                      />
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-black dark:text-white">
                        Uideck Yearly Meetings
                      </h4>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                        <span className="flex items-center gap-1.5">
                          <svg
                            className="fill-current"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.57495 2.99999V1.57499H9.92495C10.225 1.57499 10.5 1.32499 10.5 0.999988C10.5 0.674988 10.25 0.424988 9.92495 0.424988H6.09995C5.79995 0.424988 5.52495 0.674988 5.52495 0.999988C5.52495 1.32499 5.77495 1.57499 6.09995 1.57499H7.44995V2.99999C4.22495 3.29999 1.69995 5.99999 1.69995 9.27499C1.69995 12.75 4.52495 15.575 7.99995 15.575C11.475 15.575 14.3 12.75 14.3 9.27499C14.3 5.99999 11.775 3.29999 8.57495 2.99999ZM7.99995 14.45C5.14995 14.45 2.82495 12.125 2.82495 9.27499C2.82495 6.42499 5.14995 4.09999 7.99995 4.09999C10.85 4.09999 13.175 6.42499 13.175 9.27499C13.175 12.125 10.85 14.45 7.99995 14.45Z"
                              fill=""
                            ></path>
                            <path
                              d="M11.1749 8.69996H8.5749V6.09996C8.5749 5.79996 8.3249 5.52496 7.9999 5.52496C7.6999 5.52496 7.4249 5.77496 7.4249 6.09996V8.72496H6.7249C6.4249 8.72496 6.1499 8.97496 6.1499 9.29996C6.1499 9.62496 6.3999 9.87496 6.7249 9.87496H7.4249V10.575C7.4249 10.875 7.6749 11.15 7.9999 11.15C8.2999 11.15 8.5749 10.9 8.5749 10.575V9.87496H11.1999C11.4999 9.87496 11.7749 9.62496 11.7749 9.29996C11.7749 8.97496 11.4999 8.69996 11.1749 8.69996Z"
                              fill=""
                            ></path>
                          </svg>
                          <span className="text-xs font-medium">
                            10:20 AM - 3:00 PM
                          </span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg
                            className="fill-current"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 2.65002H12.7V2.10002C12.7 1.80002 12.45 1.52502 12.125 1.52502C11.8 1.52502 11.55 1.77502 11.55 2.10002V2.65002H4.42505V2.10002C4.42505 1.80002 4.17505 1.52502 3.85005 1.52502C3.52505 1.52502 3.27505 1.77502 3.27505 2.10002V2.65002H2.00005C1.15005 2.65002 0.425049 3.35002 0.425049 4.22502V12.925C0.425049 13.775 1.12505 14.5 2.00005 14.5H14C14.85 14.5 15.575 13.8 15.575 12.925V4.20002C15.575 3.35002 14.85 2.65002 14 2.65002ZM1.57505 7.30002H3.70005V9.77503H1.57505V7.30002ZM4.82505 7.30002H7.45005V9.77503H4.82505V7.30002ZM7.45005 10.9V13.35H4.82505V10.9H7.45005ZM8.57505 10.9H11.2V13.35H8.57505V10.9ZM8.57505 9.77503V7.30002H11.2V9.77503H8.57505ZM12.3 7.30002H14.425V9.77503H12.3V7.30002ZM2.00005 3.77502H3.30005V4.30002C3.30005 4.60002 3.55005 4.87502 3.87505 4.87502C4.20005 4.87502 4.45005 4.62502 4.45005 4.30002V3.77502H11.6V4.30002C11.6 4.60002 11.85 4.87502 12.175 4.87502C12.5 4.87502 12.75 4.62502 12.75 4.30002V3.77502H14C14.25 3.77502 14.45 3.97502 14.45 4.22502V6.17502H1.57505V4.22502C1.57505 3.97502 1.75005 3.77502 2.00005 3.77502ZM1.57505 12.9V10.875H3.70005V13.325H2.00005C1.75005 13.35 1.57505 13.15 1.57505 12.9ZM14 13.35H12.3V10.9H14.425V12.925C14.45 13.15 14.25 13.35 14 13.35Z"
                              fill=""
                            ></path>
                          </svg>
                          <span className="text-xs font-medium">
                            14 February,2025
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="rounded py-1.5 px-2.5 text-sm font-medium bg-meta-3/[0.08] text-meta-3 ">
                    Completed
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow items-center gap-4.5">
                    <div className="hidden h-15 w-full max-w-15 items-center justify-center rounded-full border border-stroke bg-gray dark:border-strokedark dark:bg-meta-4 xsm:flex">
                      <img
                        src="https://react-demo.tailadmin.com/assets/dribble-ccee4ce8.svg"
                        alt="2025 Dribbble Meet Up"
                      />
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-black dark:text-white">
                        2025 Dribbble Meet Up
                      </h4>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                        <span className="flex items-center gap-1.5">
                          <svg
                            className="fill-current"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.57495 2.99999V1.57499H9.92495C10.225 1.57499 10.5 1.32499 10.5 0.999988C10.5 0.674988 10.25 0.424988 9.92495 0.424988H6.09995C5.79995 0.424988 5.52495 0.674988 5.52495 0.999988C5.52495 1.32499 5.77495 1.57499 6.09995 1.57499H7.44995V2.99999C4.22495 3.29999 1.69995 5.99999 1.69995 9.27499C1.69995 12.75 4.52495 15.575 7.99995 15.575C11.475 15.575 14.3 12.75 14.3 9.27499C14.3 5.99999 11.775 3.29999 8.57495 2.99999ZM7.99995 14.45C5.14995 14.45 2.82495 12.125 2.82495 9.27499C2.82495 6.42499 5.14995 4.09999 7.99995 4.09999C10.85 4.09999 13.175 6.42499 13.175 9.27499C13.175 12.125 10.85 14.45 7.99995 14.45Z"
                              fill=""
                            ></path>
                            <path
                              d="M11.1749 8.69996H8.5749V6.09996C8.5749 5.79996 8.3249 5.52496 7.9999 5.52496C7.6999 5.52496 7.4249 5.77496 7.4249 6.09996V8.72496H6.7249C6.4249 8.72496 6.1499 8.97496 6.1499 9.29996C6.1499 9.62496 6.3999 9.87496 6.7249 9.87496H7.4249V10.575C7.4249 10.875 7.6749 11.15 7.9999 11.15C8.2999 11.15 8.5749 10.9 8.5749 10.575V9.87496H11.1999C11.4999 9.87496 11.7749 9.62496 11.7749 9.29996C11.7749 8.97496 11.4999 8.69996 11.1749 8.69996Z"
                              fill=""
                            ></path>
                          </svg>
                          <span className="text-xs font-medium">
                            09:30 AM - 12:00 AM
                          </span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg
                            className="fill-current"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 2.65002H12.7V2.10002C12.7 1.80002 12.45 1.52502 12.125 1.52502C11.8 1.52502 11.55 1.77502 11.55 2.10002V2.65002H4.42505V2.10002C4.42505 1.80002 4.17505 1.52502 3.85005 1.52502C3.52505 1.52502 3.27505 1.77502 3.27505 2.10002V2.65002H2.00005C1.15005 2.65002 0.425049 3.35002 0.425049 4.22502V12.925C0.425049 13.775 1.12505 14.5 2.00005 14.5H14C14.85 14.5 15.575 13.8 15.575 12.925V4.20002C15.575 3.35002 14.85 2.65002 14 2.65002ZM1.57505 7.30002H3.70005V9.77503H1.57505V7.30002ZM4.82505 7.30002H7.45005V9.77503H4.82505V7.30002ZM7.45005 10.9V13.35H4.82505V10.9H7.45005ZM8.57505 10.9H11.2V13.35H8.57505V10.9ZM8.57505 9.77503V7.30002H11.2V9.77503H8.57505ZM12.3 7.30002H14.425V9.77503H12.3V7.30002ZM2.00005 3.77502H3.30005V4.30002C3.30005 4.60002 3.55005 4.87502 3.87505 4.87502C4.20005 4.87502 4.45005 4.62502 4.45005 4.30002V3.77502H11.6V4.30002C11.6 4.60002 11.85 4.87502 12.175 4.87502C12.5 4.87502 12.75 4.62502 12.75 4.30002V3.77502H14C14.25 3.77502 14.45 3.97502 14.45 4.22502V6.17502H1.57505V4.22502C1.57505 3.97502 1.75005 3.77502 2.00005 3.77502ZM1.57505 12.9V10.875H3.70005V13.325H2.00005C1.75005 13.35 1.57505 13.15 1.57505 12.9ZM14 13.35H12.3V10.9H14.425V12.925C14.45 13.15 14.25 13.35 14 13.35Z"
                              fill=""
                            ></path>
                          </svg>
                          <span className="text-xs font-medium">
                            14 February,2025
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="rounded py-1.5 px-2.5 text-sm font-medium bg-primary/[0.08] text-primary ">
                    Upcoming
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow items-center gap-4.5">
                    <div className="hidden h-15 w-full max-w-15 items-center justify-center rounded-full border border-stroke bg-gray dark:border-strokedark dark:bg-meta-4 xsm:flex">
                      <img
                        src="https://react-demo.tailadmin.com/assets/linkdin-ca3bedd7.svg"
                        alt="2025 Linkedin Meet Up"
                      />
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-black dark:text-white">
                        2025 Linkedin Meet Up
                      </h4>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                        <span className="flex items-center gap-1.5">
                          <svg
                            className="fill-current"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.57495 2.99999V1.57499H9.92495C10.225 1.57499 10.5 1.32499 10.5 0.999988C10.5 0.674988 10.25 0.424988 9.92495 0.424988H6.09995C5.79995 0.424988 5.52495 0.674988 5.52495 0.999988C5.52495 1.32499 5.77495 1.57499 6.09995 1.57499H7.44995V2.99999C4.22495 3.29999 1.69995 5.99999 1.69995 9.27499C1.69995 12.75 4.52495 15.575 7.99995 15.575C11.475 15.575 14.3 12.75 14.3 9.27499C14.3 5.99999 11.775 3.29999 8.57495 2.99999ZM7.99995 14.45C5.14995 14.45 2.82495 12.125 2.82495 9.27499C2.82495 6.42499 5.14995 4.09999 7.99995 4.09999C10.85 4.09999 13.175 6.42499 13.175 9.27499C13.175 12.125 10.85 14.45 7.99995 14.45Z"
                              fill=""
                            ></path>
                            <path
                              d="M11.1749 8.69996H8.5749V6.09996C8.5749 5.79996 8.3249 5.52496 7.9999 5.52496C7.6999 5.52496 7.4249 5.77496 7.4249 6.09996V8.72496H6.7249C6.4249 8.72496 6.1499 8.97496 6.1499 9.29996C6.1499 9.62496 6.3999 9.87496 6.7249 9.87496H7.4249V10.575C7.4249 10.875 7.6749 11.15 7.9999 11.15C8.2999 11.15 8.5749 10.9 8.5749 10.575V9.87496H11.1999C11.4999 9.87496 11.7749 9.62496 11.7749 9.29996C11.7749 8.97496 11.4999 8.69996 11.1749 8.69996Z"
                              fill=""
                            ></path>
                          </svg>
                          <span className="text-xs font-medium">
                            10:30 AM - 11:00 PM
                          </span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg
                            className="fill-current"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 2.65002H12.7V2.10002C12.7 1.80002 12.45 1.52502 12.125 1.52502C11.8 1.52502 11.55 1.77502 11.55 2.10002V2.65002H4.42505V2.10002C4.42505 1.80002 4.17505 1.52502 3.85005 1.52502C3.52505 1.52502 3.27505 1.77502 3.27505 2.10002V2.65002H2.00005C1.15005 2.65002 0.425049 3.35002 0.425049 4.22502V12.925C0.425049 13.775 1.12505 14.5 2.00005 14.5H14C14.85 14.5 15.575 13.8 15.575 12.925V4.20002C15.575 3.35002 14.85 2.65002 14 2.65002ZM1.57505 7.30002H3.70005V9.77503H1.57505V7.30002ZM4.82505 7.30002H7.45005V9.77503H4.82505V7.30002ZM7.45005 10.9V13.35H4.82505V10.9H7.45005ZM8.57505 10.9H11.2V13.35H8.57505V10.9ZM8.57505 9.77503V7.30002H11.2V9.77503H8.57505ZM12.3 7.30002H14.425V9.77503H12.3V7.30002ZM2.00005 3.77502H3.30005V4.30002C3.30005 4.60002 3.55005 4.87502 3.87505 4.87502C4.20005 4.87502 4.45005 4.62502 4.45005 4.30002V3.77502H11.6V4.30002C11.6 4.60002 11.85 4.87502 12.175 4.87502C12.5 4.87502 12.75 4.62502 12.75 4.30002V3.77502H14C14.25 3.77502 14.45 3.97502 14.45 4.22502V6.17502H1.57505V4.22502C1.57505 3.97502 1.75005 3.77502 2.00005 3.77502ZM1.57505 12.9V10.875H3.70005V13.325H2.00005C1.75005 13.35 1.57505 13.15 1.57505 12.9ZM14 13.35H12.3V10.9H14.425V12.925C14.45 13.15 14.25 13.35 14 13.35Z"
                              fill=""
                            ></path>
                          </svg>
                          <span className="text-xs font-medium">
                            14 February,2025
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="rounded py-1.5 px-2.5 text-sm font-medium bg-red/[0.08] text-red ">
                    Canceled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CRM;
