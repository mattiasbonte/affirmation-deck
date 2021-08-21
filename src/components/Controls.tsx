import React from 'react'
interface Props {
  drawCard: Function
  showInfoCard: Function
}

const Controls = ({ drawCard, showInfoCard }: Props) => {
  const general = 'shadow-xl active:border-2 active:border-white'
  const iconGeneral = 'z-10 h-8 w-8 mx-4 text-white active:text-amber-500 shadow-xl rounded-full'
  const gradient = 'bg-gradient-to-r from-[#d1913c] via-[#ffd194] to-[#d1913c]'

  return (
    <>
      <button
        onClick={() => showInfoCard()}
        type="button"
        title="See Information Card"
        className={`${general} ${iconGeneral} font-bold bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700  sm:dark:hover:bg-black`}
      >
        ?
      </button>
      <button
        onClick={() => drawCard()}
        type="button"
        title="Draw A New Card"
        className={`${general} ${gradient} z-20 w-28 sm:w-48 p-2 m-2 rounded-md sm:rounded-xl hover:text-white sm:text-xl uppercase sm:font-bold active:via-amber-300 hover:font-bold active:font-white active:bg-via-black`}
      >
        take
      </button>
      <a
        onClick={() => showInfoCard()}
        type="button"
        href="https://open.spotify.com/playlist/58fwSFriZEgBArKG2qtHwA?si=0jmOqvbFT8-CRWkFfTRCAg&dl_branch=1&nd=1&utm_medium=organic&product=open&%24full_url=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F58fwSFriZEgBArKG2qtHwA%3Fsi%3D0jmOqvbFT8-CRWkFfTRCAg%26dl_branch%3D1&feature=organic&_branch_match_id=838149087786642814"
        title="Play Bloom With Tea Spotify Playlist"
        className={`${general} ${iconGeneral} bg-icon-spotify bg-cover bg-center hover:bg-white active:bg-amber-400`}
      />
    </>
  )
}

export default Controls
