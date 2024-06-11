import React from "react";
import { motion } from "framer-motion";
const Loading = () => {
    return (
        <div className="fixed top-0 left-0 bg-white h-screen w-full flex items-center justify-center z-[99999999]">
            <div className="flex flex-col w-full h-auto justify-center items-center gap-8">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="204"
                    height="177"
                >
                    <path
                        d="M0 0 C67.32 0 134.64 0 204 0 C204 58.41 204 116.82 204 177 C136.68 177 69.36 177 0 177 C0 118.59 0 60.18 0 0 Z "
                        fill="#FEFEFE"
                        transform="translate(0,0)"
                    />
                    <path
                        d="M0 0 C22.11 0 44.22 0 67 0 C67 0.99 67 1.98 67 3 C66.27554688 3.09796875 65.55109375 3.1959375 64.8046875 3.296875 C56.598137 4.41459032 56.598137 4.41459032 50 9 C48.61261332 16.55788653 51.00839746 22.41275123 54.4375 29 C54.91759521 29.96131836 55.39769043 30.92263672 55.89233398 31.91308594 C56.97292443 34.07191223 58.06241029 36.22630124 59.15917969 38.37695312 C61.19275071 42.36574296 63.1784334 46.37781032 65.1640625 50.390625 C71.52266964 63.22119935 77.92073796 76.02722825 84.65405273 88.66625977 C88.92840017 96.69755817 92.96667063 104.84566019 97 113 C101.94558586 104.21448797 106.3351505 95.24194899 110.53533936 86.078125 C112.48432475 81.83475721 114.45913057 77.60333453 116.43212891 73.37109375 C117.41777409 71.25184916 118.39750309 69.12983268 119.36865234 67.00390625 C124.46169393 55.94316133 128.69802165 48.37912028 140 43 C140.33 43.66 140.66 44.32 141 45 C140.21826172 46.98583984 140.21826172 46.98583984 138.9296875 49.4609375 C138.21437866 50.85662964 138.21437866 50.85662964 137.48461914 52.28051758 C136.95344482 53.30169678 136.42227051 54.32287598 135.875 55.375 C131.41690465 64.10894768 127.14040294 72.89493895 123.0625 81.8125 C117.17697243 94.63895519 111.01649694 107.32499932 104.8125 120 C104.3407132 120.96394684 103.86892639 121.92789368 103.38284302 122.92105103 C95.69032914 138.63084064 95.69032914 138.63084064 93 144 C91.35 144 89.7 144 88 144 C87.73406036 143.46590012 87.46812073 142.93180023 87.19412231 142.3815155 C84.37286835 136.71652132 81.54856789 131.053053 78.72265625 125.39038086 C77.67470666 123.28951736 76.62748106 121.18829254 75.58105469 119.08666992 C70.03535071 107.9500235 64.43853456 96.85127011 58.6078186 85.86088562 C54.5049533 78.10909761 50.59281259 70.26605049 46.69564819 62.40933228 C40.2617867 49.44455699 33.8104905 36.49505466 26.9375 23.75585938 C26.02162389 22.04049974 25.13540558 20.30940912 24.25 18.578125 C20.42929985 11.2041737 16.98639378 7.36287349 9.0703125 4.59375 C6.05449663 3.72883677 3.11864261 3.32485861 0 3 C0 2.01 0 1.02 0 0 Z "
                        fill="#FBFCFD"
                        transform="translate(7,27)"
                    />
                    <path
                        d="M0 0 C22.77 0 45.54 0 69 0 C69 1.65 69 3.3 69 5 C67.94039063 5.26554687 66.88078125 5.53109375 65.7890625 5.8046875 C64.40094837 6.16109518 63.01293257 6.51788596 61.625 6.875 C60.92632812 7.04902344 60.22765625 7.22304688 59.5078125 7.40234375 C55.35125264 8.44145274 55.35125264 8.44145274 52 11 C51.33797377 18.992804 54.79682302 25.76191778 58.3125 32.6875 C58.84286865 33.76169189 59.3732373 34.83588379 59.91967773 35.94262695 C64.64342443 45.45200956 69.54169472 54.87487567 74.50390625 64.26171875 C80 74.68534483 80 74.68534483 80 77 C80.66 77 81.32 77 82 77 C81.37720331 75.41579871 80.75166599 73.83267469 80.125 72.25 C79.77695313 71.36828125 79.42890625 70.4865625 79.0703125 69.578125 C78.06284557 67.0384159 78.06284557 67.0384159 76.8671875 64.859375 C76 63 76 63 76 60 C108.12439372 41.31265081 143.06503928 27.51535041 178.875 17.6875 C179.95056152 17.39109619 181.02612305 17.09469238 182.13427734 16.78930664 C183.1186377 16.53270264 184.10299805 16.27609863 185.1171875 16.01171875 C185.96909668 15.78959717 186.82100586 15.56747559 187.69873047 15.33862305 C190.13174658 14.98061399 191.68466254 15.23055553 194 16 C193.49476807 16.20455811 192.98953613 16.40911621 192.46899414 16.61987305 C181.23959414 21.20578676 170.25135324 26.18926553 159.4375 31.6875 C158.36185791 32.22141357 157.28621582 32.75532715 156.17797852 33.30541992 C145.86910833 38.63810519 143.07623401 45.68142379 138.4375 55.9375 C132.93224179 67.98606076 127.19630985 79.91379878 121.375 91.8125 C120.54976757 93.50038875 119.72457203 95.18829555 118.89941406 96.8762207 C118.49729706 97.69875839 118.09518005 98.52129608 117.68087769 99.36875916 C117.28474274 100.17906082 116.88860779 100.98936249 116.48046875 101.82421875 C116.09037628 102.62191177 115.70028381 103.4196048 115.29837036 104.24147034 C108.37033069 118.41667802 101.53324333 132.63789125 95 147 C93.02 147 91.04 147 89 147 C81.82786428 133.4511144 74.78228023 119.84147941 67.8125 106.1875 C67.31376373 105.2115387 66.81502747 104.23557739 66.30117798 103.2300415 C59.72749641 90.36476899 53.20972919 77.47369374 46.7739563 64.53894043 C42.43051176 55.81273345 38.00437865 47.14135681 33.3984375 38.55078125 C31.60180165 35.18564192 29.90125836 31.78287424 28.2265625 28.35546875 C27.7512207 27.40099854 27.27587891 26.44652832 26.78613281 25.46313477 C25.87461131 23.62984109 24.97947323 21.78826783 24.10449219 19.93725586 C20.45321961 12.67476508 16.25546417 9.429875 8.59375 6.85546875 C7.5728125 6.63503906 6.551875 6.41460937 5.5 6.1875 C4.4584375 5.95417969 3.416875 5.72085937 2.34375 5.48046875 C1.5703125 5.32191406 0.796875 5.16335937 0 5 C0 3.35 0 1.7 0 0 Z M1 1 C1 1.99 1 2.98 1 4 C1.94359375 4.14695312 1.94359375 4.14695312 2.90625 4.296875 C10.4717279 5.61855487 17.22433714 7.0151981 21.875 13.5625 C29.73822862 26.55392119 36.23416936 40.41863583 43 54 C43.5753952 55.15500504 43.5753952 55.15500504 44.16241455 56.33334351 C44.96462936 57.94371075 45.76682422 59.55408793 46.56900024 61.16447449 C48.24479133 64.52783118 49.9218313 67.89056432 51.59912109 71.25317383 C52.44684973 72.95365973 53.29385999 74.65450396 54.14013672 76.35571289 C59.09638008 86.31709098 64.13886494 96.22170844 69.347229 106.05374146 C73.5671233 114.03538852 77.6076326 122.1025244 81.625 130.1875 C82.35006642 131.6426748 83.07532657 133.09775309 83.80078125 134.55273438 C85.53606683 138.03405903 87.268805 141.5166395 89 145 C90.65 145 92.3 145 94 145 C99.29862816 134.44995139 104.53670225 123.87301393 109.6875 113.25 C110.02905121 112.54644379 110.37060242 111.84288757 110.72250366 111.11801147 C116.06945967 100.09622372 121.27585078 89.01795049 126.38598633 77.88427734 C130.32641896 69.33703824 134.48207209 60.91435154 138.83911133 52.5715332 C139.27118896 51.73066162 139.7032666 50.88979004 140.1484375 50.0234375 C140.72343994 48.92394775 140.72343994 48.92394775 141.31005859 47.80224609 C141.53773926 47.20750488 141.76541992 46.61276367 142 46 C141.67 45.34 141.34 44.68 141 44 C132.60917489 47.9935714 128.21947753 52.3254361 124.2109375 60.51171875 C123.79038086 61.34038452 123.36982422 62.16905029 122.93652344 63.02282715 C121.60238417 65.67164639 120.29665399 68.33264675 119 71 C118.57728821 71.86855621 118.15457642 72.73711243 117.71905518 73.63198853 C114.76499696 79.73237126 111.87590097 85.86247565 109 92 C107.73428063 94.69550454 106.46729584 97.39039304 105.19750977 100.08398438 C104.41813698 101.73774829 103.641154 103.39264127 102.86694336 105.04882812 C102.51897705 105.78810547 102.17101074 106.52738281 101.8125 107.2890625 C101.50957031 107.93568848 101.20664063 108.58231445 100.89453125 109.24853516 C100 111 100 111 98 114 C97.50709473 113.00895264 97.01418945 112.01790527 96.50634766 110.99682617 C85.96461835 89.64006564 85.96461835 89.64006564 75 68.5 C69.96700425 59.09108449 65.21319686 49.54115941 60.4375 40 C60.02733643 39.18217041 59.61717285 38.36434082 59.19458008 37.52172852 C58.02192613 35.18230626 56.85223027 32.84143126 55.68359375 30.5 C55.1484037 29.43259583 55.1484037 29.43259583 54.60240173 28.34362793 C51.50861093 22.12673208 49.85665009 16.96300097 51 10 C55.42226448 5.21917353 61.80646196 4.8375603 68 4 C68 3.01 68 2.02 68 1 C45.89 1 23.78 1 1 1 Z "
                        fill="#FBFBFC"
                        transform="translate(6,26)"
                    />
                    <motion.path
                        d="M0 0 C2.05082648 4.04690341 4.08052073 8.10346379 6.09130859 12.17041016 C6.77829707 13.55249986 7.47098177 14.93177333 8.16943359 16.30810547 C9.17234116 18.286815 10.15434039 20.27474206 11.1328125 22.265625 C11.44936798 22.87931946 11.76592346 23.49301392 12.09207153 24.12530518 C14.17837298 28.44235412 14.17837298 28.44235412 13.26733398 31.29052734 C12.84911377 31.85465332 12.43089355 32.4187793 12 33 C11.53464844 33.68835938 11.06929687 34.37671875 10.58984375 35.0859375 C10.04457031 35.84132812 9.49929687 36.59671875 8.9375 37.375 C6.37953987 40.96465299 3.97348655 44.60753663 1.64819336 48.34887695 C-8.2436359 64.18884424 -8.2436359 64.18884424 -18 67 C-25.69215586 68.15642208 -31.61046964 66.36073787 -38 62 C-41.84596456 58.33717661 -42.35073596 55.00605943 -42.6875 49.875 C-42.14214986 35.29927809 -30.02084499 24.76258502 -20.1328125 15.23828125 C-3.65773354 0 -3.65773354 0 0 0 Z "
                        fill="#EE1F24"
                        transform="translate(57,104)"
                        animate={{ fill: ["#FF0000", "#ffffff"] }} // Kırmızıdan turuncuya geçiş
                        transition={{
                            duration: 2, // Geçiş süresi
                            repeat: Infinity, // Sonsuz döngü
                            repeatType: "reverse", // Geriye doğru döngü
                        }}
                    />
                    <motion.path
                        d="M0 0 C-0.50523193 0.20455811 -1.01046387 0.40911621 -1.53100586 0.61987305 C-35.43358628 14.46516385 -67.79000104 32.53578515 -95.28686523 56.91821289 C-99.35234106 60.52271528 -103.61720034 63.79010167 -108 67 C-109.67643038 63.73408178 -111.33943344 60.46150893 -113 57.1875 C-113.47695312 56.25873047 -113.95390625 55.32996094 -114.4453125 54.37304688 C-114.89648438 53.48037109 -115.34765625 52.58769531 -115.8125 51.66796875 C-116.23144531 50.84578857 -116.65039062 50.0236084 -117.08203125 49.17651367 C-118 47 -118 47 -118 44 C-85.87560628 25.31265081 -50.93496072 11.51535041 -15.125 1.6875 C-14.04943848 1.39109619 -12.97387695 1.09469238 -11.86572266 0.78930664 C-10.38918213 0.40440063 -10.38918213 0.40440063 -8.8828125 0.01171875 C-8.03090332 -0.21040283 -7.17899414 -0.43252441 -6.30126953 -0.66137695 C-3.86825342 -1.01938601 -2.31533746 -0.76944447 0 0 Z "
                        fill="#EE2228"
                        transform="translate(200,42)"
                        animate={{ fill: ["#FF0000", "#ffffff"] }} // Kırmızıdan turuncuya geçiş
                        transition={{
                            duration: 2, // Geçiş süresi
                            repeat: Infinity, // Sonsuz döngü
                            repeatType: "reverse", // Geriye doğru döngü
                        }}
                    />
                    <path
                        d="M0 0 C22.77 0 45.54 0 69 0 C69 1.65 69 3.3 69 5 C67.94039063 5.26554687 66.88078125 5.53109375 65.7890625 5.8046875 C64.40094837 6.16109518 63.01293257 6.51788596 61.625 6.875 C60.92632812 7.04902344 60.22765625 7.22304688 59.5078125 7.40234375 C55.35125264 8.44145274 55.35125264 8.44145274 52 11 C51.33796974 18.99285264 54.79696204 25.76189568 58.3125 32.6875 C58.85592041 33.78779541 59.39934082 34.88809082 59.95922852 36.02172852 C63.80745372 43.76767916 67.79590749 51.4407139 71.83813477 59.08691406 C77.47229079 69.78773107 82.85059816 80.61691681 88.25 91.4375 C88.7320993 92.40356171 89.21419861 93.36962341 89.71090698 94.36495972 C92.47663919 99.9086298 95.23947533 105.45373507 98 111 C103.67857448 99.71205506 109.24484825 88.37341444 114.75 77 C115.86731059 74.69309081 116.98492091 72.38632797 118.10308838 70.07983398 C118.78929298 68.66424065 119.47500476 67.24840826 120.16009521 65.83227539 C121.10301856 63.8863514 122.05088081 61.94290853 123 60 C123.34816772 59.28110596 123.69633545 58.56221191 124.05505371 57.8215332 C124.403302 57.11085693 124.75155029 56.40018066 125.11035156 55.66796875 C125.42313049 55.02625732 125.73590942 54.3845459 126.0581665 53.72338867 C129.48900422 47.44556262 136.74070937 43.11995601 143 40 C143.99 40.33 144.98 40.66 146 41 C145.58492187 41.81855469 145.16984375 42.63710937 144.7421875 43.48046875 C134.76104331 63.26158585 125.27596215 83.29526632 115.73046875 103.2890625 C113.78115148 107.37028952 111.82430379 111.44782198 109.86328125 115.5234375 C102.31162964 131.20528865 102.31162964 131.20528865 95 147 C93.02 147 91.04 147 89 147 C81.82786428 133.4511144 74.78228023 119.84147941 67.8125 106.1875 C67.31376373 105.2115387 66.81502747 104.23557739 66.30117798 103.2300415 C59.72749641 90.36476899 53.20972919 77.47369374 46.7739563 64.53894043 C42.43051176 55.81273345 38.00437865 47.14135681 33.3984375 38.55078125 C31.60180165 35.18564192 29.90125836 31.78287424 28.2265625 28.35546875 C27.7512207 27.40099854 27.27587891 26.44652832 26.78613281 25.46313477 C25.87461131 23.62984109 24.97947323 21.78826783 24.10449219 19.93725586 C20.45321961 12.67476508 16.25546417 9.429875 8.59375 6.85546875 C7.5728125 6.63503906 6.551875 6.41460937 5.5 6.1875 C4.4584375 5.95417969 3.416875 5.72085937 2.34375 5.48046875 C1.5703125 5.32191406 0.796875 5.16335937 0 5 C0 3.35 0 1.7 0 0 Z M1 1 C1 1.99 1 2.98 1 4 C1.94359375 4.14695312 1.94359375 4.14695312 2.90625 4.296875 C10.4717279 5.61855487 17.22433714 7.0151981 21.875 13.5625 C29.73822862 26.55392119 36.23416936 40.41863583 43 54 C43.5753952 55.15500504 43.5753952 55.15500504 44.16241455 56.33334351 C44.96462936 57.94371075 45.76682422 59.55408793 46.56900024 61.16447449 C48.24479133 64.52783118 49.9218313 67.89056432 51.59912109 71.25317383 C52.44684973 72.95365973 53.29385999 74.65450396 54.14013672 76.35571289 C59.09638008 86.31709098 64.13886494 96.22170844 69.347229 106.05374146 C73.5671233 114.03538852 77.6076326 122.1025244 81.625 130.1875 C82.35006642 131.6426748 83.07532657 133.09775309 83.80078125 134.55273438 C85.53606683 138.03405903 87.268805 141.5166395 89 145 C90.65 145 92.3 145 94 145 C99.29862816 134.44995139 104.53670225 123.87301393 109.6875 113.25 C110.02905121 112.54644379 110.37060242 111.84288757 110.72250366 111.11801147 C116.06945967 100.09622372 121.27585078 89.01795049 126.38598633 77.88427734 C130.32641896 69.33703824 134.48207209 60.91435154 138.83911133 52.5715332 C139.27118896 51.73066162 139.7032666 50.88979004 140.1484375 50.0234375 C140.72343994 48.92394775 140.72343994 48.92394775 141.31005859 47.80224609 C141.53773926 47.20750488 141.76541992 46.61276367 142 46 C141.67 45.34 141.34 44.68 141 44 C132.60917489 47.9935714 128.21947753 52.3254361 124.2109375 60.51171875 C123.79038086 61.34038452 123.36982422 62.16905029 122.93652344 63.02282715 C121.60238417 65.67164639 120.29665399 68.33264675 119 71 C118.57728821 71.86855621 118.15457642 72.73711243 117.71905518 73.63198853 C114.76499696 79.73237126 111.87590097 85.86247565 109 92 C107.73428063 94.69550454 106.46729584 97.39039304 105.19750977 100.08398438 C104.41813698 101.73774829 103.641154 103.39264127 102.86694336 105.04882812 C102.51897705 105.78810547 102.17101074 106.52738281 101.8125 107.2890625 C101.50957031 107.93568848 101.20664063 108.58231445 100.89453125 109.24853516 C100 111 100 111 98 114 C97.50709473 113.00895264 97.01418945 112.01790527 96.50634766 110.99682617 C85.96461835 89.64006564 85.96461835 89.64006564 75 68.5 C69.96700425 59.09108449 65.21319686 49.54115941 60.4375 40 C60.02733643 39.18217041 59.61717285 38.36434082 59.19458008 37.52172852 C58.02192613 35.18230626 56.85223027 32.84143126 55.68359375 30.5 C55.1484037 29.43259583 55.1484037 29.43259583 54.60240173 28.34362793 C51.50861093 22.12673208 49.85665009 16.96300097 51 10 C55.42226448 5.21917353 61.80646196 4.8375603 68 4 C68 3.01 68 2.02 68 1 C45.89 1 23.78 1 1 1 Z "
                        fill="#4B77B8"
                        transform="translate(6,26)"
                    />
                    <path
                        d="M0 0 C17.49 0 34.98 0 53 0 C53 1.65 53 3.3 53 5 C52.20335937 5.23074219 51.40671875 5.46148438 50.5859375 5.69921875 C40.58282532 8.77803552 36.41577345 11.33972468 31.5 20.5 C27.36324345 27.63428912 23.36422204 29.22061373 15.78125 31.36328125 C14.40453125 31.67845703 14.40453125 31.67845703 13 32 C12.67 31.34 12.34 30.68 12 30 C13.1940104 26.72551694 14.58351189 23.5572119 15.96875 20.359375 C17.0959106 16.68756395 17.05547444 14.66217647 16 11 C11.75899632 7.18309669 5.41874311 6.33807842 0 5 C0 3.35 0 1.7 0 0 Z "
                        fill="#F6F8FB"
                        transform="translate(131,26)"
                    />
                    <path
                        d="M0 0 C17.49 0 34.98 0 53 0 C53 1.65 53 3.3 53 5 C52.20335937 5.23074219 51.40671875 5.46148438 50.5859375 5.69921875 C40.58282532 8.77803552 36.41577345 11.33972468 31.5 20.5 C27.36324345 27.63428912 23.36422204 29.22061373 15.78125 31.36328125 C14.40453125 31.67845703 14.40453125 31.67845703 13 32 C12.67 31.34 12.34 30.68 12 30 C13.1940104 26.72551694 14.58351189 23.5572119 15.96875 20.359375 C17.0959106 16.68756395 17.05547444 14.66217647 16 11 C11.75899632 7.18309669 5.41874311 6.33807842 0 5 C0 3.35 0 1.7 0 0 Z M1 1 C1 1.99 1 2.98 1 4 C2.10408203 4.27263672 2.10408203 4.27263672 3.23046875 4.55078125 C13.26329902 7.13519592 13.26329902 7.13519592 17 10 C18.8464303 13.69286061 18.39620952 17.54876744 17.328125 21.4609375 C16.59324078 23.6586573 15.82491242 25.83460489 15 28 C20.29335092 27.32860071 24.57777484 26.50546576 28.3359375 22.52734375 C30.30198697 19.72892467 32.16218402 16.88376194 34 14 C38.58772804 8.60941955 44.11883097 5.53255435 51 4 C51 3.01 51 2.02 51 1 C34.5 1 18 1 1 1 Z "
                        fill="#4371B5"
                        transform="translate(131,26)"
                    />
                    <path
                        d="M0 0 C-2.02589239 3.03883859 -2.56087315 3.48675311 -5.6875 4.875 C-14.24468316 8.68200333 -18.21400006 13.10435534 -22.125 21.5625 C-22.57875 22.50399902 -23.0325 23.44549805 -23.5 24.41552734 C-25.02467991 27.59932684 -26.51602419 30.79703168 -28 34 C-28.27920288 34.60193176 -28.55840576 35.20386353 -28.84606934 35.82403564 C-29.72881305 37.72741701 -30.61062882 39.63122577 -31.4921875 41.53515625 C-31.78481476 42.16674149 -32.07744202 42.79832672 -32.37893677 43.4490509 C-33.8205716 46.56366728 -35.25446687 49.68138434 -36.67236328 52.80688477 C-37.1929834 53.94569092 -37.71360352 55.08449707 -38.25 56.2578125 C-38.70890625 57.2698877 -39.1678125 58.28196289 -39.640625 59.32470703 C-40.89550906 61.79435852 -42.26154138 63.85185315 -44 66 C-43.45667104 60.26351082 -41.2022996 55.80264209 -38.66796875 50.7265625 C-38.23494949 49.84398773 -37.80193024 48.96141296 -37.35578918 48.05209351 C-35.97364553 45.2394053 -34.58074255 42.43220425 -33.1875 39.625 C-32.26165981 37.74514117 -31.33652228 35.8649361 -30.41210938 33.984375 C-28.3221156 29.73754815 -26.22782472 25.49293869 -24.11898804 21.25543213 C-23.37008693 19.74594717 -22.62681375 18.23365754 -21.8890686 16.71868896 C-21.36643936 15.65210052 -21.36643936 15.65210052 -20.83325195 14.56396484 C-20.52861526 13.93726898 -20.22397858 13.31057312 -19.91011047 12.66488647 C-16.80304998 6.9810677 -6.58825922 -2.19608641 0 0 Z "
                        fill="#527CBA"
                        transform="translate(152,67)"
                    />
                    <path
                        d="M0 0 C0 5.26112145 -2.48206966 9.1909306 -6 13 C-10.54831841 15.28426658 -15.06728794 16.71614344 -20 18 C-20.33 17.34 -20.66 16.68 -21 16 C-20.01 16 -19.02 16 -18 16 C-18 15.34 -18 14.68 -18 14 C-17.20335937 13.74347656 -16.40671875 13.48695312 -15.5859375 13.22265625 C-7.7297328 10.38410054 -3.73580242 7.52076014 0 0 Z "
                        fill="#5A81BC"
                        transform="translate(164,40)"
                    />
                    <path
                        d="M0 0 C0.99 0.33 1.98 0.66 3 1 C0.95458277 4.06812585 0.18330925 4.63867546 -3 6.125 C-3.70125 6.45757812 -4.4025 6.79015625 -5.125 7.1328125 C-5.74375 7.41898437 -6.3625 7.70515625 -7 8 C-7.99 8.495 -7.99 8.495 -9 9 C-9.66 8.34 -10.32 7.68 -11 7 C-9.23754778 5.8000962 -7.46473019 4.61540483 -5.6875 3.4375 C-4.70136719 2.77621094 -3.71523437 2.11492187 -2.69921875 1.43359375 C-1.80847656 0.96050781 -0.91773438 0.48742187 0 0 Z "
                        fill="#9BA5C9"
                        transform="translate(149,66)"
                    />
                    <path
                        d="M0 0 C1.32 0.33 2.64 0.66 4 1 C3.2575 1.495 2.515 1.99 1.75 2.5 C-1.65862674 5.59875158 -3.18726063 8.82766134 -5 13 C-5.68359375 11.296875 -5.68359375 11.296875 -6 9 C-4.78515625 6.640625 -4.78515625 6.640625 -3.0625 4.25 C-2.49660156 3.45078125 -1.93070313 2.6515625 -1.34765625 1.828125 C-0.90292969 1.22484375 -0.45820313 0.6215625 0 0 Z "
                        fill="#698BC1"
                        transform="translate(136,74)"
                    />
                    <path
                        d="M0 0 C-3.63 1.32 -7.26 2.64 -11 4 C-11.33 3.34 -11.66 2.68 -12 2 C-11.01 2 -10.02 2 -9 2 C-9 1.34 -9 0.68 -9 0 C-4.5 -2.25 -4.5 -2.25 0 0 Z "
                        fill="#A0ACCE"
                        transform="translate(155,54)"
                    />
                    <path
                        d="M0 0 C2.15377564 2.62198774 3.40072174 4.64404172 4 8 C3.01 8 2.02 8 1 8 C0.26919734 6.02253397 -0.39421747 4.01927511 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z "
                        fill="#F7E2E5"
                        transform="translate(88,101)"
                    />
                    <path
                        d="M0 0 C0.99 0.33 1.98 0.66 3 1 C1 4 1 4 -1.625 4.6875 C-2.800625 4.8421875 -2.800625 4.8421875 -4 5 C-3 2 -3 2 0 0 Z "
                        fill="#738EC0"
                        transform="translate(149,66)"
                    />
                </svg>

                <div className="relative w-full sm:w-3/4 md:w-2/4 lg:w-1/4 h-1/3 flex items-center justify-center">
                    <div className="h-8 w-8 flex items-center justify-center bg-[#FF0000] rounded-full animate-bounce"></div>
                    <div
                        className="h-8 w-8 flex items-center justify-center bg-[#f04a4a] rounded-full animate-bounce"
                        style={{ animationDelay: "-0.32s" }}
                    ></div>
                    <div
                        className="h-8 w-8 flex items-center justify-center bg-[#eb6e6e] rounded-full animate-bounce"
                        style={{ animationDelay: "-0.64s" }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
