import CommonInput from '../common-input';
import CommonSelect from '../common-select';
import CommonTextarea from '../common-text-area';

const formTypes = {
  INPUT: 'input',
  SELECT: 'select',
  TEXTAREA: 'textarea',
  CHECKBOX: 'checkbox',
};

function CommonForm({
  formControls = [],
  formData,
  setFormData,
  onHandleSubmit,
  buttonText,
}) {
  function renderFormElement(getCurrentElement) {
    let content = null;
    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            type={getCurrentElement.type}
            value={formData[getCurrentElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );

        break;

      case formTypes.TEXTAREA:
        content = (
          <CommonTextarea
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
           z
          />
        );
        break;

      case formTypes.SELECT:
        content = (
          <CommonSelect
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            value={formData[getCurrentElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
            options={getCurrentElement.options}
          />
        );
        break;

      case formTypes.CHECKBOX:
        content = (
          <div>
            <label htmlFor={getCurrentElement.name}>
              <input
                type="checkbox"
                id={getCurrentElement.id}
                name={getCurrentElement.name}
                checked={formData[getCurrentElement.name] || false}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [event.target.name]: event.target.checked,
                  })
                }
              />
              {getCurrentElement.label}
            </label>
          </div>
        );
        break;

      default:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            type={getCurrentElement.type}
            value={formData[getCurrentElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return content;
  }
  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map((singleFormElementItem) =>
            renderFormElement(singleFormElementItem)
          )
        : null}
      <div style={{ marginTop: '15px' }}>
        <button type="submit">{buttonText || 'Submit'}</button>
      </div>
    </form>
  );
}

export default CommonForm;
