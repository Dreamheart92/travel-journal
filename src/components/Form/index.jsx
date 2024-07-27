import { Children, useContext, useEffect, useRef } from 'react';
import style from './index.module.css';
import TextInput from './Input/TextInput';
import { FormContext } from '../../context/FormContext';


      <div className={style['error-container']}>
        {error && !isSubmitting
          && <ErrorMessage message={error.message} />}
      </div>

      {children}
    </form>
  );
}
