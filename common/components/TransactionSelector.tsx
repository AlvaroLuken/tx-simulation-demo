import formatWalletAddress from "@common/utils/formatWalletAddress";
import { TransactionParams } from "@common/utils/mocks";

export const TransactionSelector = ({
  setParams,
  transactions
}: {
  setParams: (p: any) => void
  transactions: TransactionParams
}) => {
  return (
    <>
    {
      transactions.map((tx, key) => {
        return (
          <div
            className="card w-full bg-base-200 border-2 border-primary-focus mb-3"
            key={key}
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