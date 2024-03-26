import { CartForm } from '@shopify/hydrogen';
import { useEffect, useState } from 'react';

export default function ProductForm({
  variantId,
  custom = false,
  button,
  quantity = 1,
}) {
  const lines = [{ merchandiseId: variantId, quantity: quantity }];
  const [showAlert, setShowAlert] = useState(false);

  const showAlertAndDismiss = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };
  useEffect(() => {
    document
      .querySelectorAll('.flash-button')
      .forEach((btn) => btn.addEventListener('click', showAlertAndDismiss));
  }, []);
  return (
    <CartForm route="/cart" action={CartForm.ACTIONS.LinesAdd} inputs={{ lines }}>
      <div className="" style={{ position: 'relative' }}>
        {custom ? (
          button
        ) : (
          <button className="btn " onClick={showAlertAndDismiss}>
            Add to Cart
          </button>
        )}

        {showAlert && (
          <div className="fixed-bottom">
            <div
              className="alert alert-success alert-dismissible fade show"
              style={{ maxWidth: '300px' }}
              role="alert"
            >
              <p style={{ fontSize: '1.4rem', fontStyle: 'normal' }}>
                Added To the Cart!
              </p>
            </div>
          </div>
        )}
      </div>
    </CartForm>
  );
}
