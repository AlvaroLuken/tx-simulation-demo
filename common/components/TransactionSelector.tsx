import formatWalletAddress from "@common/utils/formatWalletAddress";
import { TransactionParam, TransactionParams } from "@common/utils/mocks";

export const TransactionSelector = ({
  setParams,
  transactions,
  currentParams,
  multiSelect
}: {
  setParams: (p: any) => void
  transactions: TransactionParams
  currentParams: TransactionParams
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
                    return curr.filter((t: TransactionParam) => t !== tx);
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
              <p>{tx.method}</p>
              <p>
                From: {formatWalletAddress(tx.params[0].from)}
              </p>
              <p>
                To: {formatWalletAddress(tx.params[0].to)}
              </p>
            </div>
          </div>
        )
      })
    }
    </>
  )
}