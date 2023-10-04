import formatWalletAddress from "@common/utils/formatWalletAddress";
import { Execution } from "types";

export const TransactionSelector = ({
  setParams,
  transactions,
  currentParams,
  multiSelect
}: {
  setParams: (p: any) => void
  transactions: Array<Execution>
  currentParams: Array<Execution>
  multiSelect: boolean
}) => {
  return (
    <>
    {
      transactions.map((tx, key) => {
        return (
          <div
            className={`
              card w-full border-2 border-primary-focus mb-3 cursor-pointer
              ${currentParams.find(t => t === tx) ? "bg-accent" : "bg-base-200 hover:bg-base-300"}
            `}
            key={key}
            onClick={() => {
              const isSelected = currentParams.find(t => t === tx)
              if (multiSelect) {
                if (isSelected) {
                  // remove from params
                  setParams((curr: any) => {
                    return curr.filter((t: Execution) => t !== tx);
                  })
                } else {
                  // add to params
                  setParams((curr: any) => {
                    return [...curr, tx]
                  })
                }
              } else {
                return setParams([tx]);
              }
            }
          }
          >
            <div className="card-body text-sm">
              <p>
                {tx.txType}
              </p>
              <p>
                From: {formatWalletAddress(tx.apiParams.params[0].from)}
              </p>
              <p>
                To: {formatWalletAddress(tx.apiParams.params[0].to)}
              </p>
            </div>
          </div>
        )
      })
    }
    </>
  )
}