// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../../middleware/Middleware'; //_splitter_
import * as settings from '../../../config/config'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import { DmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class updateAllEntity1S {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'updateAllEntity1S';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new updateAllEntity1S(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_updateAllEntity1S_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: updateAllEntity1S');
    //appendnew_flow_updateAllEntity1S_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: updateAllEntity1S');

    this.app['post'](
      `${this.serviceBasePath}/dm/erd/entity_1/update-all`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_BUriOIptFuwtqa3W(bh, parentSpanInst);
          //appendnew_next_sd_BeCbHfByAB0QTrKI
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_BeCbHfByAB0QTrKI');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_updateAllEntity1S_HttpIn
  }
  //   service flows_updateAllEntity1S

  //appendnew_flow_updateAllEntity1S_start

  async sd_BUriOIptFuwtqa3W(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BUriOIptFuwtqa3W',
      parentSpanInst
    );
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'entity_1');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8R9kDyRFeBfyGmoi(bh, parentSpanInst);
      //appendnew_next_sd_BUriOIptFuwtqa3W
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BUriOIptFuwtqa3W',
        spanInst,
        'sd_BUriOIptFuwtqa3W'
      );
    }
  }

  async sd_8R9kDyRFeBfyGmoi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8R9kDyRFeBfyGmoi',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_MsveiTdT4FSAQYZr');
      bh.result = await dmUtilsInst.updateByFilter(
        '_EN_0yr9cbpxpn',
        bh.filter,
        bh.input.body.entity_1
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_IpUaU51q741upXgr(bh, parentSpanInst);
      //appendnew_next_sd_8R9kDyRFeBfyGmoi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ApyrKarP42etED6z',
        spanInst,
        'sd_8R9kDyRFeBfyGmoi'
      );
    }
  }

  async sd_IpUaU51q741upXgr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bhKbOGLOzuGRkrO5');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    throw e;
  }
  //appendnew_flow_updateAllEntity1S_Catch
}
