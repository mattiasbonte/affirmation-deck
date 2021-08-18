import React from 'react'
interface Props {
  drawCard: Function
  showInfoCard: Function
}

const Controls = ({ drawCard, showInfoCard }: Props) => {
  return (
    <>
      <button
        onClick={() => showInfoCard()}
        type="button"
        className="z-10 mx-4 bg-gray-800 h-8 w-8 text-white shadow-xl dark:bg-[#494946] rounded-full hover:shadow-2xl hover:scale-125 dark:hover:bg-gray-700 hover:bg-gray-900 "
        title="See Information Card"
      >
        ?
      </button>
      <button
        onClick={() => drawCard()}
        type="button"
        className="z-20 sm:w-48 hover:scale-110 hover:text-white rounded-md sm:rounded-xl sm:text-xl p-2 m-2 sm:font-bold uppercase w-28 border hover:border-gray-300 border-yellow-600 bg-gradient-to-r from-[#d1913c] via-[#ffd194] to-[#d1913c] hover:font-bold hover:via-amber-300"
        title="Draw A New Card"
      >
        Draw
      </button>
      <a
        href="https://open.spotify.com/playlist/58fwSFriZEgBArKG2qtHwA?si=0jmOqvbFT8-CRWkFfTRCAg&dl_branch=1&nd=1&utm_medium=organic&product=open&%24full_url=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F58fwSFriZEgBArKG2qtHwA%3Fsi%3D0jmOqvbFT8-CRWkFfTRCAg%26dl_branch%3D1&feature=organic&_branch_match_id=838149087786642814"
        onClick={() => showInfoCard()}
        type="button"
        className="z-10 bg-icon-spotify bg-cover bg-center mx-4 h-8 w-8 shadow-xl dark:bg-[#494946] rounded-full hover:shadow-2xl hover:scale-125 "
        title="Play Bloom With Tea Spotify Playlist"
      />
    </>
  )
}

export default Controls
