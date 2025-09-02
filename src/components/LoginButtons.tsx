interface LoginButtonsProps{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

function LoginButtons({ onSubmit, onCancel }: LoginButtonsProps) {
  return (
    <div className="gap-10 flex flex-row justify-center">
      <button className='bg-red-700 hover:bg-red-800 transition ease delay-150 text-white py-2 px-4 rounded-lg' type="button" onClick={onCancel}>Cancel</button>
      <button className='bg-green-700 hover:bg-green-800 transition ease delay-150 text-white text-xl py-2 px-4 rounded-lg' type="submit">Login</button>
    </div>
  );
}

export default LoginButtons;
