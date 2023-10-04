import formatWalletAddress from "@common/utils/formatWalletAddress";
import { TransactionParam, TransactionParams } from "@common/utils/mocks";

export const TransactionSelector = ({
  setParams,
  transactions,
  currentParams
}: {
  setParams: (p: any) => void
  transactions: TransactionParams
  currentParams: TransactionParam
}) => {
  return (
    <>
    {
      transactions.map((tx, key) => {
        return (
          <div
            className={`
              card w-full border-2 border-primary mb-3 hover:bg-base-300 hover:border-primary-focus cursor-pointer
              ${currentParams === tx ? "bg-accent" : "bg-base-200"}
            `}
            key={key}
            onClick={() => setParams(tx)}
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