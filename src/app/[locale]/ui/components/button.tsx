import clsx from "clsx"

type Props = {
  children: React.ReactNode
  colour: string
}

export function Button({ children, colour }: Props) {
  return (
    <button
      className={clsx(
        "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
      )}
    >
      {children}
    </button>
  )
}
